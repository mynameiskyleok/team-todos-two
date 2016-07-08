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
* startup/
** client/
&nbsp;&nbsp;&nbsp;index.js                 // import client startup through a single index entry point
&nbsp;&nbsp;&nbsp;routes.js                // set up all routes in the app
&nbsp;&nbsp;&nbsp;useraccounts-configuration.js // configure login templates
&nbsp;&nbsp;server/
&nbsp;&nbsp;&nbsp;fixtures.js              // fill the DB with example data on startup
&nbsp;&nbsp;&nbsp;index.js                 // import server startup through a single index entry point

&nbsp;api/
&nbsp;&nbsp;tasks/                     // a unit of domain logic
&nbsp;&nbsp;&nbsp;server/
&nbsp;&nbsp;&nbsp;&nbsp;publications.js        // all list-related publications
&nbsp;&nbsp;&nbsp;&nbsp;publications.tests.js  // tests for the list publications
&nbsp;&nbsp;&nbsp;tasks.js                 // definition of the tasks collection
&nbsp;&nbsp;&nbsp;tasks.tests.js           // tests for the behavior of that collection
&nbsp;&nbsp;&nbsp;methods.js               // methods related to tasks
&nbsp;&nbsp;&nbsp;methods.tests.js         // tests for those methods

&nbsp;ui/
&nbsp;&nbsp;components/                // all reusable components in the application
                               // can be split by domain if there are many
&nbsp;&nbsp;layouts/                   // wrapper components for behavior and visuals
&nbsp;&nbsp;pages/                     // entry points for rendering used by the router

client/
&nbsp;main.js                      // client entry point, imports all client code

server/
&nbsp;main.js                      // server entry point, imports all server code
