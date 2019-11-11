import React from 'react';
import {Link} from 'react-router-dom';
import './Rides.css';

import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles(theme => ({
    fab1: {
        backgroundColor: '#50FBDF',
        width: '80%',
    },
    fab2: {
        backgroundColor: '#FFF',
        width: '80%',
    },
}));

export default function Rides() {
    const classes = useStyles();

    return(
        <div className='bg-black App'>
            <div className='root-container'>
                <div class='root-text'>
                    <p className='mt3 fw6 f1'>Wanna go somewhere?</p>
                    <p className='fw6 text'>Share in idle hour with our Commmunity</p>
                </div>
                <div className='root-btn'>
                    <Fab variant="extended" aria-label="like" className={classes.fab1} component={Link} to={`/dashboard/lease?name=rides`}>
                        offer a bike
                    </Fab>
                    <p className=' white'><span>━━━━━━</span> OR <span>━━━━━━</span></p>
                    <Fab variant="extended" aria-label="like" className={classes.fab2} component={Link} to={`/dashboard/rent?name=rides`}>
                        find a bike
                    </Fab>
                </div>
            </div>
        </div>
    );
}
