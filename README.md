# team-todos-two
A [Meteor](https://www.meteor.com/) based todo list for teams. Using [Materiliaze](http://meteor-materialize-boilerplate.meteor.com/) and [React](https://facebook.github.io/react/).

## Installation

1. Clone this repo to your `<appname>` directory

  `git clone https://github.com/mynameiskyleok/team-todos-two.git`

## Run Application

1. `cd <appname>`
2. `npm install`
3. `meteor`

## File Structure

imports/
  startup/
    client/
      index.js                 // import client startup through a single index entry point
      routes.js                // set up all routes in the app
      useraccounts-configuration.js // configure login templates
    server/
      fixtures.js              // fill the DB with example data on startup
      index.js                 // import server startup through a single index entry point

  api/
    tasks/                     // a unit of domain logic
      server/
        publications.js        // all list-related publications
        publications.tests.js  // tests for the list publications
      tasks.js                 // definition of the tasks collection
      tasks.tests.js           // tests for the behavior of that collection
      methods.js               // methods related to tasks
      methods.tests.js         // tests for those methods

  ui/
    components/                // all reusable components in the application
                               // can be split by domain if there are many
    layouts/                   // wrapper components for behavior and visuals
    pages/                     // entry points for rendering used by the router

client/
  main.js                      // client entry point, imports all client code

server/
  main.js                      // server entry point, imports all server code
