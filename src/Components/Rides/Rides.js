import React from 'react';
import {Link} from 'react-router-dom';
import './Rides.css';

export default function Rides() {
    return(
        <div className='App'>
            <div className='root-container'>
                <div className='root-text'>
                    <p className='mt3 fw6 f1'>Wanna go somewhere?</p>
                    <p className='fw6 text'>Share in idle hour with our Commmunity</p>
                </div>
                <div className='root-btn'>
                    <Link to={`/dashboard/lease?name=rides`}>
                        <button className='btn-signup' >
                            Offer a ride
                        </button>
                    </Link>
                    <p className=' white'><span>━━━━━━</span> OR <span>━━━━━━</span></p>
                    <Link to={`/dashboard/rent?name=rides`}>
                        <button className='btn-login' >
                            Find a ride
                        </button>   
                    </Link>
                </div>
            </div>
        </div>
    );
}
