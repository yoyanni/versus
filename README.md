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

### Create weightClass dropdown and populate

This would have been something that could have been done on the previous commit but thats cool.

### Add id to data

Should have added this previously, ran into a problem where I needed the ids to select the correct fighter in the whole data set instead the filtered weightclass set (since .filter returns a new array and new indices)

### Fix dropdown & fighter ids

Instead of using vanilla JS to display or hide the dropdowns, I used React, MUCH easier and faster. A couple boolean states, two different classes and 2 ternaries.

I also added the ids to each fighter to be able to select the correct one in the parent component and pass it on to the sibling component.

### Update Weight and Fighter States

Weight and Fighters States can now be updated. I had to add a side state in Versebar which helps determine which side (red or blue) I will be updating for the Fighters State. I was not sure if this was the best method as it seemed a bit more convoluted but at the moment it makes a bit more sense, it helps by re-using the same code (if I had split the Fighters State into two, I would have to split everything I do believe) and it helps by being able to pass both fighters with one state to another component.

When the Weight State is updated the Fighters State gets reset, it checks thought if the Weight State is the same. If it is then it wont update and wont reset the Fighters State.

I also removed nanoid, thought it was required but I used the indices.

### Update Data

The recovery stat in Health was missing, also a few details were cleaned up.

### Update Stats in Card Component

Update the below files:

- App
  - Added initial Fighters
  - Removed the resetting of Fighter State as it would crash the app. (it will need to be updated later)
  - Changed .filter() to .find() to locate one item. (Which is the correct method to use for one item)
  - Passed states to Card & Versebar components to allow the dynamic data.
- Card, FighterInfo, Perk, StandUp, Grappling and Health
  - All received props, mainly the red and blue fighters.
  - Used .reduce() to locate the average stat for each specific card
- Versebar
- Updated names according to Fighter State that was passed down.

**Note:**

- .reduce() will use the accumilator as the initial value if you do not provide one after the callback function
- At the moment the fighters will remain the same when changing Weight State, as mentioned previously, that is because the weight state is required but it wont have the most updated version. It will have the previous version still. Have to figure out how to fix that.

### Refactor Code

Re-wrote code with a bit of a better understanding of React due have a quick read through React Docs (Beta).

Resolved the previous issue with the fighters by having a set of default fighters for each weight class.

The Generic WeightClass always loads with all the other Weight Classes.

Also now the dropdowns hide away when you select a fighter.

### Refactor Code (UI)

The application went through a refactoring for how it displays its data. Since it was difficult and not too great in terms of design I thought it needed a bit of a revamp.

The data was also updated to include the rank of the top 15 fighters (in-game rank) and also to include more information on the perks.

A tooltip was added to the perks, which is nice.

Also the colours were added to understand the data easier.

### Add Timer and WeightClass

The Navbar now works and shows you what weightclass it actually is on the game AND how long is left.

### Refactor Code

The whole application went through another refactoring. Since I have a better understanding (again) after reading all the React Docs, I took advantage of React's concepts a bit better.

What was done?

- Removed redundant state
- Bundled a few bits of code that was being repeated, created components and mapped through the data
- CSS classes were cleaned up (using BEM)

### Set the Server up

The structure of the site was altered to house the server and was also setup for basic use.

### Add the Database and Connect

Backend:

The database was connected, the Model/Schema was created for the table of fighters.

From the database side, a few fighters were added for testing purposes.

Frontend:

Fetch function was added to test the Model/Schema of the fighters table and that everything was working as intented.

### Add CRUD operations - Create

A general shape of the CRUD operations were added to the back-end but the create operation was focused on.

A form was created in the front end which proved to be quite challenging. I needed to think about how my data was structed, how would that translate to UI and the accessing and manipulation of the data inputed to fit the data structure in the back-end.

In the back-end I added a few details that were missing, like parsing the body to json and looking up the latest id in the db and adding it to the new fighter.

**Note:** I realised my data structure might not have the best design while going through the above. I decided to go through it anyways as it currently was, achieve the functionality that I was aiming and then to restructor/refactor the code.

### Restructor data / Refactor code

Data structure in the database has been altered to a more efficient structure. Due to the data structure changes, the way the frontend consumed that data and the form needed to be changed.

Not only was the data structure of the database altered but also the state structure of a fighter to align with best practises when having to update deeply nested state properties (keeping the state flat).

After going through a couple versions to see what best fitted, I comprised between keeping the fighter object (state) flat and having some depth. This way the state isnt too verbose due to the object being completly flat and not having to copy all the objects/arrays down a few levels when updating state.

### Add Client-side Routing

Added React router to be able to navigate to a page since from here on out we will need each action roughly on a new page.

Also added defaultFighters to standardInfo.js

### Add CRUD operations - Read

New stuff that was added:

- You can now display all the fighters per category
- You can now display a single fighter and their moves (for now?)
- Fighters (state) was lifted to accomodate for the new routes.
- It will display the fighter you just created.

Bugs:

- The model in the backend was missing the ground strikes

### Add CRUD operations - Update

You can now update existing fighters, also a loading screen was added for when the page is refreshed when in a component where it depends on the fighters list.

Also the controller was modified, it now brings back the whole fighter list in the db to correctly update the fighters state.

A "Not found" page was added in the fighter route.

### Add CRUD operations - Delete

You can now delete an existing fighter, also all urls for the back were prefixed with "/api" to accomodate for best practises.

### Restrict view to only mobile

I restricted the view to only mobile to keep the application clean. I did not like the current design for the any other device so once i have designed the different viewports I will then remove this restriction.

### Update the Versebar design

The Versebar has been updated to a better design (in my opinion). What was done:

- The whole UI design changed
- The file structure of the Versebar component changed
- A filter feature was added

### Style the CRUD Operations

Style was added to the CRUD operations, it is now much more visually pleasing. A few things that changed were:

- Accordion/AccordionItem components were created and used for list (eg. all fighters per weightclass, all types of moves of a fighter)
- The way they have been set out makes it easier to understand what you have chosen or not.
- Some general cleaning and better positioning of file structures but also code (eg. better and more comments were added, better practises were used)
- Attempted to keep everything actioned the same way, so new routes were created to be uniform.

### Setup Production Database and Connection

Not much was done other than setting up the Cluster on MongoDB, supplying the connection string and testing it.
