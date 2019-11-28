import React from 'react';
import {Link} from 'react-router-dom';
//material
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    fontSize: '10'
  },
}));

export default function CardListAvail({startTime,endTime,caption,price,rollNo,bicyclefrmNo,rating}) {
    const classes = useStyles();

    return(
        <div className='fl w-100'>
            <List>
                <ListItem className='bg-white br3 w-100'>
                    <div className={classes.details}>
                        <p className='black'>{`${bicyclefrmNo}`}</p>
                        <Typography
                            component="span"
                            variant="body2"
                            color="textSecondary"
                        >
                            {`Slot: ${(startTime)} to ${(endTime)}`}
                        </Typography>
                        <Typography
                            component="span"
                            variant="body2"
                            color="textSecondary"
                        >
                            {`Caption:  ${caption}`}
                        </Typography>
                        <Typography
                            component="span"
                            variant="body2"
                            color="textSecondary"
                        >
                            {`Pricing:  ₹${price}`}
                        </Typography>
                        <Typography
                            component="span"
                            variant="body2"
                            color="textSecondary"
                        >
                            {`RollNo:  ${rollNo}`}
                        </Typography>
                        <Typography
                            component="span"
                            variant="body2"
                            color="textSecondary"
                        >
                            {`Rating:  ${rating}`}
                        </Typography>
                    </div>
                    <div className='w-20'>
                        <Button variant="contained" color="primary" size="small" component={Link} to={`/dashboard/book/${bicyclefrmNo}`}>
                            Book
                        </Button>
                    </div>
                </ListItem>
                <Divider variant="inset" component="li" />
            </List>
        </div>
    );
}
