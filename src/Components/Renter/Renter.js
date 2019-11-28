import React from 'react';
import {Route, useRouteMatch, Switch, Link, useLocation} from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';
import './Renter.css';

import AddBicycleForm from './AddBicycleForm';
import UserBicycle from './UserBicycle';
import AddBicycleAvail from './AddBicycleAvail';

const useStyles = makeStyles(theme => ({
    absolute: {
      position: 'fixed',
      bottom: theme.spacing(10),
      right: theme.spacing(3),
    },
}));

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function Renter() {
    let {path} = useRouteMatch();
    const classes = useStyles();
    let query = useQuery();

    return(
        <div style={{position: 'relative'}}>
            <Switch>
                <Route exact path={`${path}`}>
                    <UserBicycle />
                </Route>
                <Route path={`${path}/bicycle-add-form`}>
                    <AddBicycleForm/>
                </Route>
                <Route path={`${path}/bicycle-avail-form/:bicyclefrmNo`}>
                    <AddBicycleAvail/>
                </Route>
            </Switch>
            <div className={query.get("name") === "rides"?"":"clip"}>
                <Tooltip title="Add Bicycle">
                    <Fab color="secondary" className={classes.absolute}  component={Link} to='/dashboard/lease/bicycle-add-form' >
                        <AddIcon />
                    </Fab>
                </Tooltip>
            </div>
        </div>
    );
}

export default Renter;
