import React from 'react';
import {Route, useRouteMatch, Switch, useLocation, Link} from 'react-router-dom';
import Header from '../Header';
import Navigation from '../Navigation/Navigation';

import Rides from '../Rides/Rides';
import MyRides from '../MyRides/MyRides';
import Profile from '../Profile/Profile';
import Renter from '../Renter/Renter';
import Rentee from '../Rentee/Rentee';
import List from '../List/List';
    
function useQuery() {
    return new URLSearchParams(useLocation().search);
}

class DashboardHome extends React.Component {
    constructor() {
        super();
        this.state = {
            temp: '',
            text: '',
        }
    }

    async componentDidMount() {
        fetch("http://dataservice.accuweather.com/currentconditions/v1/190066?apikey=mXAnG2iwcSc8AuIXj02pfnmSs6dGXZ9a", {
            "method": "GET",
        })
        .then(resp => resp.json())
        .then(resp => {
            this.setState({text: resp[0].WeatherText});
            this.setState({temp: resp[0].Temperature.Metric.Value});
        })
        .catch(err => {
            console.log(err);
        });
    }

    render() {
        return(
            <div className='dashboard pt1'>
                <h1 style={{paddingTop: '10px'}}>Welcome</h1>
                <div>
                    <img src={require('../../Images/logoBlack.png')} alt='logoBlack' height='100px' width='auto' />
                </div> 
                <div className='center pa3'>
                    <div className='bg-black-20 w-60 br3'>
                        <h5 className='fl pl2'>Weather for cycling:<p>{`"${this.state.text}"`}</p></h5>
                        <h5 className='fr pr2'>Temp: <p>{`${this.state.temp} C°`}</p></h5>
                    </div>
                </div>
                <p style={{opacity: '0.8'}}>Powered by AccuWeather©</p>
                <h6 className='text'>All good??</h6>
                <Link to='/dashboard/rides?name=rides'>
                    <button className='bookBtn w-60 br3'>Book/Lease a ride!</button>
                </Link>
            </div>
        );
    }
}

export default function Dashboard() {
    let {path} = useRouteMatch();
    let query = useQuery();

    return (
        <div className='App'>
            <Header name={query.get("name")} />
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
                    <Route path={`${path}/list`}>
                        <List />
                    </Route>
                </Switch>
            </div>
            <Navigation name={query.get("name")}/>
        </div>
    );
}
