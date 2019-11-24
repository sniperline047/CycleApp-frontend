import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import CreateRoundedIcon from '@material-ui/icons/CreateRounded';
import Tooltip from '@material-ui/core/Tooltip/Tooltip';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
    textTransform: 'capitalize'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '10'
  },
}));

export default function CardList({bicycleUrl,company,color,bicyclefrmNo,model,leased,availibility,handleEditPicture,handleImageChange}) {
    const classes = useStyles();
    return(
        <List>
            <ListItem alignItems="flex-start">
                <div className='pr3 w-20'>
                    <img src={bicycleUrl} alt="cycle" height='100%' width='100%' className='ba' />
                    <input type='file' id='imageUpload' hidden='hidden' onChange={handleEditPicture} />
                    <Tooltip title='Edit picture' placement='right' >
                        <CreateRoundedIcon color='primary' className='change-btn1 ba grow' onClick={() => handleImageChange(bicyclefrmNo.toUpperCase())} />
                    </Tooltip>
                </div>
                <div className={classes.details}>
                    <ListItemText primary={`${company.toUpperCase()} ${model.toUpperCase()}`} />
                    <Typography
                        component="span"
                        variant="body2"
                        color="textSecondary"
                    >
                        {`Frame No: ${bicyclefrmNo.toUpperCase()}`}
                    </Typography>
                    <Typography
                        component="span"
                        variant="body2"
                        color="textSecondary"
                    >
                        {`Color:  ${color.toUpperCase()}`}
                    </Typography>
                    <Typography
                        component="span"
                        variant="body2"
                        color="textSecondary"
                    >
                        {`Availaible:  ${availibility?'Yes':'No'}`}
                    </Typography>
                    <Typography
                        component="span"
                        variant="body2"
                        color="textSecondary"
                    >
                        {`Rented:  ${leased?'Yes':'No'}`}
                    </Typography>
                </div>
            </ListItem>
            <Divider variant="inset" component="li" />
        </List>
    );
}
