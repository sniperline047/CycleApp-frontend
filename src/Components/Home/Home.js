import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../Images/logo.png';
import './Home.css';

export default function Home() {
    return(
        <div className='App'>
            <div className="bg-logo">
                <img className='mt1' src={logo} alt='logo' height='60px' width='auto' />
            </div> 
            <img src={require('../../Images/homeBg.jpg')} alt='cycle' className='img-home' />
            <div className='paper shadow'>
                <p className='text'>"When in doubt. Pedal it out."</p>
                <Link to='/register'>
                    <button className='btn-signup' >
                        SIGN UP
                    </button>
                </Link>
                <Link to='/login'>
                    <button className='btn-login' >
                        LOG IN
                    </button>
                </Link>
            </div>
        </div>
    );
}
