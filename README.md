# Versus Website - A Cheatsheet for UFC 4

Just a cool idea I had and wanted to create.

## Purpose

It helps anyone who plays EA Sports UFC 4 on any console/platform.

It will:

- Compare stats and perks of two fighters so you understand what you are better at and what your opponent is better at.
- It will have the fighter moves to better understand the fighter you are using.
- It will also help with more general facts of the game (e.g. What movements are possible and how to action those)
- ...

## Things to look into

Just a few things that popped up during the development of this site that I need to look into:

- Versebar since position: fixed/absolute is removed from normal document flow but i still need it to take its size in the viewport so details are not hidden after the fact.
- max-height was not working with a % value (Versebar)

### Commit History

#### Initial Commit

Just getting everything setup for starters.

### Add Navbar and Versebar

The Navbar and Versebar were added according to figma design. There might be some stuff that will need to be tweak later but for now it is serving its purpose. At the moment, everything is hardcoded but that will change once we get the general "shape" of the website. As you can see it will be mobile first and eventually once there is some functionality it will update to accomadate desktops.

### Add Cards

The cards will be displaying different areas of a fighter and comparing against the opponent.

The types of cards and areas of the fighter are:

- Basic Fighter Information:
  - Type of Fighter & overall rating of the fighter
  - Stance
  - Reach
- Perks
- Stand-Up (Anything to do with his striking)
- Grappling (Anything to do with his wrestling, jiu-jitsu and judo)
- Health
  - Health
  - Stamina
  - Recovery

Might be able to add everything to one component but for now they are all separate with their own css classes (even though the Stand-Up, Grappling and Health are practically identical).

An issue that I did encounter was that the Health Card was hidden by the Versebar. The Versebar is position: fixed and since that removes it from the normal flow of the document, the Health card hides beneath it. To resolve the issue for now, I have add extra padding on the bottom of the Card component.

There were a few small changes to previously commited files but nothing of significance.

### Add Data

Using google sheets, I was able to create a big array of fighter objects. After a few attempts of trying to import the data I was finally able to and I am now ready to go aheady and some functionality driven by the saved data.

### Create dropdown and populate with data

Dropdown was created. Clicking the Red or Blue fighter (Left or Right) will display a dropdown with the specific weight class fighters. Nanoid was used to add a key for each item, might just add an id to the data sometime later.
