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
```
.
├── imports/
|   ├── startup/
|   |   ├── client/
|   |   |   ├── index.js &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// import client startup through a single index entry point
|   |   |   ├── routes.js &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// set up all routes in the app
|   |   |   ├── useraccounts-configuration.js &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// configure login templates
|   |   ├── server/
|   |   |   ├── fixtures.js &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// fill the DB with example data on startup
|   |   |   ├── index.js &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// import server startup through a single index entry point

|   ├── api/
|   |   ├── tasks/ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// a unit of domain logic
|   |   |   ├── server/
|   |   |   |   ├── publications.js &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; // all list-related publications
|   |   |   |   ├── publications.tests.js &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; // tests for the list publications
|   |   |   ├── tasks.js &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// definition of the tasks collection
|   |   |   ├── tasks.tests.js &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// tests for the behavior of that collection
|   |   |   ├── methods.js &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// methods related to tasks
|   |   |   ├── methods.tests.js &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// tests for those methods

|   ├── ui/
|   |   ├── components/ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// all reusable components in the application
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// can be split by domain if there are many
|   |   ├── layouts/ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// wrapper components for behavior and visuals
|   |   ├── pages/ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// entry points for rendering used by the router

├── client/
|   ├── main.js &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// client entry point, imports all client code

├── server/
|   ├── main.js &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// server entry point, imports all server code
```
