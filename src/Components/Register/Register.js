import React from 'react';
import {Link} from 'react-router-dom';
import back from '../../Images/back.png';
import logo from '../../Images/logo.png';
import google from '../../Images/google.png';
import './Register.css';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    bar: {
        backgroundColor: '#F6D11C',
        color: 'white',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

function RegisterHeader() {
    const classes = useStyles();

    return(
        <div className={classes.root} >
            <AppBar position="static" className={classes.bar}>
                <Toolbar>
                    <Link to='/'>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <img src={back} alt='back' width='30px' />
                        </IconButton>
                    </Link>
                    <Typography variant="h6" className={classes.title}>
                        Register
                    </Typography>
                    <Link to='/Login' className='link pointer white'>
                        <Button color="inherit">Login</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}

class Register extends React.Component {
	constructor() {
		super()
		this.state = {
			first_name: '',
			last_name: '',
			dob: '',
			mob: '',
			email: '',
			password: '',
		}

		this.onChange = this.onChange.bind(this)
		this.onSubmit = this.onSubmit.bind(this) 
	}

	onChange = (event) => {
		this.setState({[event.target.name]: event.target.value});
	}
	
	onSubmit = (event) => {
		event.preventDefault()

		this.props.history.push('/login');
    }
    
    render() {
        return(
            <div>
                <RegisterHeader />
                <div>
                    <img src={logo} alt='logo' height='100px' width='auto' />
                </div> 
                <button className="google-btn">
                    <span role='img'><img src={google} alt='google' height='30px' /> Login with Google</span>
                </button>
                <p className='textSmall'><span>━━━━━━</span> OR <span>━━━━━━</span></p>
                <form noValidate onSubmit={this.onSubmit}>
                    <div className="container">
                        <p>Please fill in this form to create an account.</p>
                        <hr/>
                        <label for="psw-repeat"><b>First Name</b></label>
                        <input type="text" placeholder="First Name" name="first-name" required value={this.state.first_name} onChange={this.onChange} />

                        <label for="psw-repeat"><b>Last Name</b></label>
                        <input type="text" placeholder="Last Name" name="last-name" required value={this.state.last_name} onChange={this.onChange} />

                        <label for="psw-repeat"><b>DOB</b></label>
                        <input type="date" placeholder="DOB" name="dob" required value={this.state.dob} onChange={this.onChange} />

                        <label for="psw-repeat"><b>Modile Number</b></label>
                        <input type="number" placeholder="Modile Number" name="mob" required maxLength="10"  value={this.state.mob} onChange={this.onChange} />

                        <label for="email"><b>Email</b></label>
                        <input type="text" placeholder="Enter Email" name="email" required  value={this.state.email} onChange={this.onChange} />
                    
                        <label for="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" required minLength="4"  value={this.state.password} onChange={this.onChange} />
                        <hr/>
                    
                        <p>By creating an account you agree to our <Link to='/'>Terms & Privacy</Link></p>                     
                        <button type="submit" className="registerbtn">Register</button>
                    </div>
                    
                    <div className="container signin">
                        <p>Already have an account? <Link to='/Login'>Log in</Link></p>
                    </div> 
                </form>
            </div>
        );
    }
}

export default Register;