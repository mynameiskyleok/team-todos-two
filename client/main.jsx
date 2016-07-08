// These main.js files won’t do anything themselves, but they should import
// some startup modules which will run immediately, on client and server
// respectively, when the app loads. These modules should do any configuration
// necessary for the packages you are using in your app, and import the rest
// of your app’s code.

import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import '../imports/startup/client/useraccounts-configuration.js';
// import App from '../imports/ui/App.jsx';
import { renderRoutes } from '../imports/startup/client/routes.jsx';

Meteor.startup(() => {
  // render(<App />, document.getElementById('render-target'));
  render(renderRoutes(), document.getElementById('render-target'));
});
