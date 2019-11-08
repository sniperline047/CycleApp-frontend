import React from 'react';
import {Link} from 'react-router-dom';
import back from '../Images/back.png';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
    },
    bar: {
        backgroundColor: '#F6D11C',
        color: 'white',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));


function Header({name}) {
    const classes = useStyles();

    return(
        <div className='root'>
            <AppBar position="static" className={classes.bar}>
                <Toolbar>
                    <Link to='/'>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <img src={back} alt='back' width='30px' />
                        </IconButton>
                    </Link>
                    <Typography variant="h6" className={classes.title}>
                        {`${name}`}
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;