import React from 'react';
import {Link} from 'react-router-dom';
//material
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Tooltip from '@material-ui/core/Tooltip/Tooltip';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles(theme => ({
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: '60%',
    fontSize: '10'
  },
}));

export default function CardList({bicycleUrl,company,color,bicyclefrmNo,model,leased,availibility,handleEditPicture,handleImageChange,deleteAvail,addAvail}) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const classes = useStyles();
    
    return(
        <List>
            <ListItem alignItems="flex-start">
                <div className='pr3 w-20'>
                    <img src={bicycleUrl} alt="cycle" height='100%' width='100%' className='ba bicycleImage' />
                    <input type='file' id='imageUpload' hidden='hidden' onChange={handleEditPicture} />
                    <Tooltip title='Edit picture' placement='right' >
                        <PhotoCamera color='primary' className='change-btn1 ba grow' onClick={() => handleImageChange(bicyclefrmNo.toUpperCase())} />
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
                <div className='w-20'>
                    <Tooltip title="Delete">
                        <IconButton aria-label="delete" onClick={handleClickOpen}>
                            <DeleteIcon />
                        </IconButton>
                    </Tooltip>
                    <Button variant="contained" color="primary" size="small" component={Link} to={`/dashboard/lease/bicycle-avail-form/${bicyclefrmNo}`}>
                        Rent
                    </Button>
                </div>
                <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Are you sure?"}</DialogTitle>
                    <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        No
                    </Button>
                    <Button onClick={() => {deleteAvail(bicyclefrmNo); handleClose()}} color="primary" autoFocus>
                        Yes
                    </Button>
                    </DialogActions>
                </Dialog>
            </ListItem>
            <Divider variant="inset" component="li" />
        </List>
    );
}
