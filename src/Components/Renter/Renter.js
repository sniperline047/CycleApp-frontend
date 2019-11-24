import React from 'react';
import {Route, useRouteMatch, Switch, Link} from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';
import './Renter.css';

import AddBicycleForm from './AddBicycleForm';
import UserBicycle from './UserBicycle';

const useStyles = makeStyles(theme => ({
    absolute: {
      position: 'fixed',
      bottom: theme.spacing(10),
      right: theme.spacing(3),
    },
}));

function Renter() {
    let {path} = useRouteMatch();
    const classes = useStyles();

    return(
        <div style={{position: 'relative'}}>
            <Switch>
                <Route exact path={`${path}`}>
                    <UserBicycle />
                </Route>
                <Route path={`${path}/bicycle-form`}>
                    <AddBicycleForm/>
                </Route>
            </Switch>
            <Tooltip title="Add Bicycle">
                <Fab color="secondary" className={classes.absolute}  component={Link} to='/dashboard/lease/bicycle-form' >
                    <AddIcon />
                </Fab>
            </Tooltip>
        </div>
    );
}

export default Renter;
