# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Versus is a mobile-only cheatsheet for EA Sports UFC 4. Its core feature is comparing the stats, perks and moves of two fighters (a "red" and a "blue" side), backed by a fighter database with full CRUD.

## Commands

npm workspaces monorepo (`./client`, `./server`). Install from the root with `npm install`.

```bash
npm run dev  --workspace=@versus/client   # Vite dev server
npm run host --workspace=@versus/client   # Vite dev server exposed on the LAN (needed to test on a phone)
npm run build --workspace=@versus/client  # builds to client/dist, which the server serves statically

npm run dev   --workspace=@versus/server  # nodemon on server/app.js
npm run start --workspace=@versus/server  # plain node
```

There are no tests, linter or formatter configured.

The server needs `server/.env` with `DATABASE_URL` (MongoDB connection string) and optionally `PORT` (defaults to 5000).

## Architecture

### Backend (`server/`, CommonJS)

Four flat files: [app.js](server/app.js) (Express setup + routes), [controller.js](server/controller.js) (handlers), [fighter.js](server/fighter.js) (Mongoose model), [mongoose-config.js](server/mongoose-config.js) (connection). All API routes are under `/api/fighters`; everything else falls through to the built client in `client/dist`.

Two conventions the controllers rely on:

- `_id` is a **Number**, not an ObjectId. `createFighter` derives the next id by reading the highest existing one (`findOne({}, "id").sort({ _id: -1 })`) and incrementing it.
- Create, update and delete all respond with the **entire fighter list**, not the single affected record. The client uses that response to replace its `fighters` state wholesale.

### Frontend (`client/`, React 18 + Vite, JSX, no TypeScript)

`fighters` lives as a single state in [App.jsx](client/src/App.jsx), fetched once on mount and passed down; `setFighters` is threaded to every mutating component so it can swap in the list returned by the API. Routes render `<Loading />` until the list is non-empty, so any component under a route can assume `fighters` is populated. App also renders a full-screen "use a smartphone" warning above 400px viewport width — the desktop layout is deliberately unimplemented.

Routes in [src/routes/](client/src/routes/) are thin wrappers that pull params and pass props into the real components in [src/components/](client/src/components/):

- `/` → `Home` → `Cards` + `Versebar` (the comparison feature)
- `/fighters` → `ReadAll`, `/fighters/:id` → `ReadOne` (also owns the delete handler)
- `/fighters/create` and `/fighters/:id/update` → the same `Form` component; presence of the `:id` param is what switches it between POST and PUT.

`Home` keeps only `selectedIds` (`{ weightClass, red, blue }`) in state and derives the actual fighter objects and the weight-class-filtered list on each render. Fighters with `weightClass === "Generic"` appear in every weight class. `standard.defaultFighters[weightClassIndex]` supplies the starting pair when the weight class changes.

[src/standardInfo.js](client/src/standardInfo.js) is the single source of static game data — weight classes, ranks, the perk catalogue with descriptions, valid stat/level values, move lists, the stat key lists used to render cards, and default fighter pairings. Adding a stat, move type or perk means editing this file **and** the Mongoose schema.

### Fighter data shape

The schema is intentionally "flat with a little depth": `weightClass`, `rank`, `firstName`/`nickname`/`lastName` at the top; `basic`, `standUp`, `grappling`, `health` each as `{ level, skills: {...} }`; `perks` as an array of `{ name, description, type }`; and `moves` grouped by category (`punches`, `kicks`, `clinch`, `takedowns`, `submissions`, `combos`, plus a nested `ground` with `getups`/`transitions`/`reversals`/`sweeps`/`strikes`).

`Form` deliberately holds a *different*, flatter shape in state (`standUpStats`, `grapplingStats`, `punches`, `getups`, … all as siblings) so updates never need deep spreading, then reassembles the nested API payload at submit time. When changing fields, both the form state shape and that assembly step need updating together.

### Conventions

- CSS is plain per-component stylesheets colocated with the component, imported directly, using BEM-ish class names scoped by component (`cards__card__content__perks__red-set__perk`). Design tokens (colors, font sizes, spacing `--s1`–`--s5`, borders, shadows) are CSS custom properties defined in [index.css](client/src/index.css); use them rather than literal values.
- A component directory uses `index.jsx` + `index.css` for the root and named files for its children (see `components/Versebar/`, `components/CRUD/Form/`).
- Data fetching is plain `fetch` with `.then()` chains inline in components; there is no API client module.

### Known rough edges

The API base URL is hardcoded and **inconsistent**: [App.jsx](client/src/App.jsx#L30) points at the deployed `https://versus.onrender.com`, while [routes/fighter.jsx](client/src/routes/fighter.jsx#L16) and [Form/index.jsx](client/src/components/CRUD/Form/index.jsx#L418-L420) point at a LAN address (`http://192.168.1.9:5000`). Reads and writes therefore hit different backends unless the URLs are aligned first.

The Navbar in-game weight-class timer counts from a fixed epoch (`new Date(2023, 5, 1, 11)`) and assumes a 5-hour rotation.

## README

[README.md](README.md) doubles as a running dev log — each commit gets a section describing what changed and why. Keep appending to it when making substantive changes.
