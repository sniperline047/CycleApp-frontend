import React from 'react';
import logo from '../Images/giphy.gif';
import {Link} from 'react-router-dom';

export const NotFound = () => (
  <div style={{height: '100vh', backgroundColor: 'black', color: 'white'}} className='App' >
    <img src={logo} alt='404' style={{height: '25vh', width: 'auto', marginTop: '20px'}} />
    <h1>Whoops!</h1>
    <h2>404</h2>
    <h4>This is not the page you're looking for</h4>
    <Link to='/'>Go back</Link>
  </div>
);
