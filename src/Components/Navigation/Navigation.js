import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import './Navigation.css';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

class Navigation extends React.Component {
    render() {
        return (
            <div className='root'>
                <BottomNavigation
                className='nav'
                >
                    <Link to='/option' className='pa2 w-33 center link pointer br bb br3 bg-light-blue'>
                        <LocationOnIcon/>
                        Ride
                    </Link>
                    <Link to='/profile' className='pa2 w-33 center link pointer br bb br3 bg-gold'>
                        <RestoreIcon />
                        Profile
                    </Link>
                    <Link to='/offers' className='pa2 w-33 center link pointer bb br3 bg-washed-green'>
                        <FavoriteIcon />
                        Offers
                    </Link>
                </BottomNavigation>
            </div>
        );
    }
}

export default withRouter(Navigation);