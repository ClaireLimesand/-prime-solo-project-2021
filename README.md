# Gifter
*Duration: 2 weeks*

This was my first full-stack CRUD app! What an adventure. Gifter allows a user to keep track of their loved one’s upcoming events and add gift ideas so a special day will never catch them by surprise and they’ll always have a thoughtful present idea in their pocket. Users can browse their friends, their upcoming events, and view a friend’s page where they can add, edit, or delete a gift idea, or check out what gifts they thought their loved one might enjoy. Be ready, gift easy. 

![Working Image](/public/gifter_demo.gif)

## Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)

## Installation

- Create a new database called `gift_app` 
- The queries in the `database.sql` file are setup to create and populate the necessary tables to allow this application to run correctly. Install [PostgreSQL](https://www.postgresql.org/download/) for your database and [Postico](https://eggerapps.at/postico/) to run the queries.
- Create a `.env` file at the root of the project and paste this line into the file:
  ```
  SERVER_SESSION_SECRET=superDuperSecret
  ```
  While you're in your new `.env` file, replace `superDuperSecret` with some long random string to keep your application secure. Here's a site that can help you: [https://passwordsgenerator.net/](https://passwordsgenerator.net/). If you don't do this step, create a secret with less than eight characters, or leave it as `superDuperSecret`, you will get a warning.
- Run `npm install`
- Start postgres if not running already by using `brew services start postgresql`
- Running the server code requires `nodemon`. If you don't already have `nodemon`, install it globally with `npm install nodemon --global`. 
- Run `npm run server`
- Run `npm run client`
- Navigate to `localhost:3000`
- On localhost:3000 right click and click "inspect" to open up the console. Click the "Toggle Device Toolbar" on the upper left corner of the console and select iPhone 6/7/8 or the mobile view of your choice. This project was built to be used as a mobile app so this will give you the most accurate experience. 

## Usage

1. When you get to the landing page of the account, click register to create an account. If you already have one then click login.
2. Use the nav bar to add a friend, then view that friend's page through the friends view.
3. Click add event and add gift to personalize that friend's page.
4. Using the nav bar find the events view to look at your loved one's upcoming events. 
5. To edit or delete events and gifts, click the edit icon next to each item on a friend's page. 
6. To log out, simply click log out at the bottom of the page.

## Built With

Javascript, React, React-Redux, Sagas, Node.js, PostgreSQL, Material UI, HTML, CSS

## Acknowledgment

Thanks to Prime Digital Academy who helped me to make Gifter a reality. Special thanks to my classmates and my instructor Matt Black.

## Contacts

Do you have questions, comments or feedback? Reach me at clairelimesand@gmail.com