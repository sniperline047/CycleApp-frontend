import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import withSplashScreen from './HOC/withSplashScreen';
// import {PrivateRoute} from './Helpers/PrivateRoute';

import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Dashboard from './Components/Dashboard/Dashboard';
import {NotFound} from './Components/NotFound';
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={Dashboard} />

        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default withSplashScreen(App);
