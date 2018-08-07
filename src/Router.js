import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'
import Dashboard from './components/Dashboard';
import FormDash from './components/Dashboard/FormDash';
import NotFound from './components/Dashboard/NotFound';

export default () => (
  <Router history={hashHistory}  >
    <Route path='/dashboard' component={Dashboard}>
      <Route path='/form' component={FormDash} />
      <Route path='/notFound' component={NotFound} />
    </Route>
    <Redirect from='*' to='/form' />
  </Router>
)