import React from 'react';
import {Link} from 'react-router-dom';
import './Navigation.css';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

function getState(value) {
  if(value === 'rides') return 0;
  else if(value === 'profile') return 1;
  else if(value === 'my-rides') return 2;
}

export default function SimpleBottomNavigation({name}) {
  const initValue = getState(name);
  const [value, setValue] = React.useState(initValue);
  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      style={{justifyContent: 'space-around', backgroundColor: '#f1f1f1', borderRadius: '20px 20px 0px 0px'}}
      className='navBar'
    >
      <BottomNavigationAction style={{borderRadius: '20px'}} className='navBox' label="Rides" icon={<LocationOnIcon />} component={Link} to={`/dashboard/rides?name=rides`} />
      <BottomNavigationAction style={{borderRadius: '20px'}} className='navBox' label="Profile" icon={<FavoriteIcon />} component={Link} to={`/dashboard/profile:id?name=profile`} />
      <BottomNavigationAction style={{borderRadius: '20px'}} className='navBox' label="MyRides" icon={<RestoreIcon />} component={Link} to={`/dashboard/my-rides:id?name=my-rides`} />
    </BottomNavigation>
  );
}