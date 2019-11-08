import React from 'react';
import logo from '../../Images/logo.png';
import './Home.css';
import {Link} from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(1,5),
        height: '30%',
        bottom: 0,
        left: 0,
        width: '100%',
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        borderRadius: '20px',
    },
    fab1: {
        backgroundColor: '#50FBDF',
        margin: theme.spacing(1),
        width: '100%',
    },
    fab2: {
        backgroundColor: '#FFF',
        margin: theme.spacing(1),
        width: '100%',
    },
}));

function Home() {
    const classes = useStyles();

    return(
        <div>
            <div className='top'></div>
            <div className="bg-text">
                <img src={logo} alt='logo' height='60px' width='auto' />
            </div> 
            <Paper className={classes.root}>
                <p className='text'>"When in doubt. Pedal it out."</p>
                <Link to='/register' className='link pointer'>
                    <Fab variant="extended" aria-label="like" className={classes.fab1}>
                        sign up
                    </Fab>
                </Link>
                <Link to='/login' className='link pointer'>
                    <Fab variant="extended" aria-label="like" className={classes.fab2}>
                        log in
                    </Fab>
                </Link>
            </Paper>
        </div> 
    );
}

export default Home;