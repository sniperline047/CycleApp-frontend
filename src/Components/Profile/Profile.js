import React from 'react';
import './Profile.css';
import Header from '../Header';
import Navigation from '../Navigation/Navigation';
import profile from '../../Images/prof.jpg';
import { Link } from '@material-ui/core';

function Profile() {
    return(
        <div>
            <Header name='User Profile' className='head' />
            <div className='igroot pt4' >
                <img src={profile} alt="profile pic" width='100px'/>
                <p>Ayush Singh</p>
                <Link to='/'>
                    <button className='white b pv2 ph3 bg-gold hover-bg-mid-gray bn br-pill'>Log Out</button>
                </Link>
            </div>
            <Navigation className='foot' />
        </div>
    );
}

export default Profile;