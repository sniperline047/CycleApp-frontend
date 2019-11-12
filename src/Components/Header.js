import React from 'react';
import {Link} from 'react-router-dom';
import back from '../Images/back.png';
import {getName, getLink, getRoute} from '../Helpers/UserFunction';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
    },
    bar: {
        backgroundColor: '#F6D11C',
        color: 'white',
        borderRadius: '0px 0px 15px 15px',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        fontWeight: 'bold',
        flexGrow: 1,
    },
}));

export default function Header({name}) {
    const classes = useStyles();
    const displayName = getName(name);
    const displayLink = getLink(name);
    const route = getRoute(name);

    return(
        <div className='root'>
            <AppBar position="static" className={classes.bar}>
                <Toolbar>
                    <Link to={`${route}`}>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <img src={back} alt='back' width='30px' />
                        </IconButton>
                    </Link>
                    <Typography variant="h6" className={classes.title}>
                        {`${displayName}`}
                    </Typography>
                    <Link to={displayLink} className='link pointer white'>
                        <Button color="inherit">{`${displayLink}`}</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}
