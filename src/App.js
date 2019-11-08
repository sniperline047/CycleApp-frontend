import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import withSplashScreen from './HOC/withSplashScreen';

import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Option from './Components/Option/Option';
import Profile from './Components/Profile/Profile';
import Renter from './Components/Renter/Renter';
import Rentee from './Components/Rentee/Rentee';
import Offers from './Components/Offers/Offers';

function App() {
  return (
    <Router className="h-100">
      <div className="App">
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/option" exact component={Option} />
        <Route path="/rentee" exact component={Renter} />
        <Route path="/renter" exact component={Rentee} />
        <Route path="/offers" exact component={Offers} />
      </div>
    </Router>
  );
}

export default withSplashScreen(App);
