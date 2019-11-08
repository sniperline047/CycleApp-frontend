import React from 'react';
import {Link} from 'react-router-dom';
import './Option.css';
import Header from '../Header';
import Navigation from '../Navigation/Navigation';

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

function Option() {
    const classes = useStyles();

    return(
        <div className='bg-black'>
            <Header name='Rides' className='head1'/>
            <div className='groot'>
                <p className='mt3 text white fw6 f1'>Wanna go somewhere?</p>
                <p className='text white fw6'>Share in idle hour with our Commmunity</p>
                <Link to='/rentee' className='link pointer'>
                    <Fab variant="extended" aria-label="like" className={classes.fab1}>
                        offer a bike
                    </Fab>
                </Link>
                <p className='text white'><span>━━━━━━</span> OR <span>━━━━━━</span></p>
                <Link to='/renter' className='link pointer'>
                    <Fab variant="extended" aria-label="like" className={classes.fab2}>
                        find a bike
                    </Fab>
                </Link>
            </div>
            <Navigation className='foot' />
        </div>
    );
}

export default Option;