import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import { Accounts, STATES } from 'meteor/std:accounts-ui';

import taskList from '../../ui/taskList.jsx';
import taskReports from '../../ui/taskReports.jsx';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/">
      <Route path="tasks" component={taskList}/>
      <Route path="team" component={taskList}/>
      <Route path="reports" component={taskReports}/>
      <Route path="/signin" component={ Accounts.ui.LoginForm } formState={ STATES.SIGN_IN } />
      <Route path="/signup" component={ Accounts.ui.LoginForm } formState={ STATES.SIGN_UP } />
      <Route path="/signup" component={ Accounts.ui.LoginForm } formState={ STATES.SIGN_OUT } />
      {/*<Route path="calendar" component={taskCalendar}/>
      <Route path="tasks/:id" component={taskList}/>
      <Route path="signin" component={AuthPageSignIn}/>
      <Route path="join" component={AuthPageJoin}/>
      <Route path="*" component={NotFoundPage}/>*/}
    </Route>
  </Router>
);
