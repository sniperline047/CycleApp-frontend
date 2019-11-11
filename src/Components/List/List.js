import React from 'react';
import { Link } from '@material-ui/core';

export default function List() {
    return(
        <div>
            <Link to='/'>
                <button className='white b pv2 ph3 bg-gold hover-bg-mid-gray bn br-pill mt4'>Go back</button>
            </Link>
        </div>
    );
}