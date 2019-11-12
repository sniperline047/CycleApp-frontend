import React from 'react';
import {Route, useRouteMatch, Switch, useLocation} from 'react-router-dom';
import './Dashboard.css';
import Header from '../Header';
import Navigation from '../Navigation/Navigation';

import Rides from '../Rides/Rides';
import MyRides from '../MyRides/MyRides';
import Profile from '../Profile/Profile';
import Renter from '../Renter/Renter';
import Rentee from '../Rentee/Rentee';
    
function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function DashboardHome() {
    return(
        <h3>Welcome</h3>
    );
}

export default function Dashboard() {
    let {path} = useRouteMatch();
    let query = useQuery();

    return (
        <div className='App'>
            <Header name={query.get("name")}/>
            <div className='App'>
                <Switch>
                    <Route exact path={`${path}`}>
                        <DashboardHome />
                    </Route>
                    <Route path={`${path}/rides`}>
                        <Rides />
                    </Route>
                    <Route path={`${path}/my-rides:id`}>
                        <MyRides />
                    </Route>
                    <Route path={`${path}/profile:id`}>
                        <Profile />
                    </Route>
                    <Route path={`${path}/lease`}>
                        <Renter />
                    </Route>
                    <Route path={`${path}/rent`}>
                        <Rentee />
                    </Route>
                </Switch>
            </div>
            <Navigation name={query.get("name")}/>
        </div>
    );
}
