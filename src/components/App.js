import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
// import { withSession } from '../containers/auth/withSession';
import Dashboard from './Dashboard';
import Callback from '../containers/auth/Callback';

export default function App() {

  return (
    <Router>
      <Switch>
        {/* <Route exact path="/" component={withSession(Dashboard)} /> */}
        <Route exact path="/" component={Dashboard} />
        <Route path="/callback" component={Callback} /> 
      </Switch>
    </Router>
  );
}
