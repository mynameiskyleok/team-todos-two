// These main.js files won’t do anything themselves, but they should import
// some startup modules which will run immediately, on client and server
// respectively, when the app loads. These modules should do any configuration
// necessary for the packages you are using in your app, and import the rest
// of your app’s code.

import { Meteor } from 'meteor/meteor';

import '../imports/api/tasks/tasks.js';


Meteor.startup(() => {
  // code to run on server at startup
});
