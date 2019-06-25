import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { withSession } from '../containers/auth/withSession';
import Dashboard from './Dashboard';
import Callback from '../containers/auth/Callback';
import JobById from '../containers/JobById';
import LandingPage from './landing/LandingPage';

export default function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/dashboard" component={withSession(Dashboard)} />
        <Route path="/callback" component={Callback} /> 
        <Route exact path="/:id" component={withSession(JobById)} />
      </Switch>
    </Router>
  );
}
