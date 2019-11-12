import React from 'react';
import './MyRides.css';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
      margin: 10,
    },
}));

export default function MyRides() {
    const classes = useStyles();

    return(
        <div>
          <div className='center'>
            <List className={classes.root}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <DirectionsBikeIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Ride 1" secondary="Jan 9, 2019" />
                <p className='black-30 pr2 f6'>3pm-6pm</p>
                <p className='bg-black-10 br3 blue pa3 f6 w-30 center'>Pending</p>
              </ListItem>
              <hr />
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <DirectionsBikeIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Ride 2" secondary="Jan 9, 2019" />
                <p className='black-30 pr2 f6'>2pm-8pm</p>
                <p className='bg-black-10 br3 green pa3 w-30 f6 center'>Completed</p>
              </ListItem>
              <hr />
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <DirectionsBikeIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Ride 3" secondary="Jan 7, 2019" />
                <p className='black-30 pr2 f6'>4pm-6pm</p>
                <p className='bg-black-10 br3 green pa3 w-30 f6 center'>Completed</p>
              </ListItem>
              <hr />
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <DirectionsBikeIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Ride 4" secondary="July 20, 2019" />
                <p className='black-30 pr2 f6'>12pm-1pm</p>
                <p className='bg-black-10 br3 red pa3 w-30 f6 center'>Cancelled</p>
              </ListItem>
            </List>
          </div>
        </div>
    );
}
