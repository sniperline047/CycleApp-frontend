import React from 'react';
import { Link } from 'react-router-dom';

export default function List() {
    return(
        <div>
            <Link to='/dashboard/rent?name'>
                <button className='white b pv2 ph3 bg-gold hover-bg-mid-gray bn br-pill mt4'>Go back</button>
            </Link>
        </div>
    );
}