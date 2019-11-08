import React from 'react';
import {Link} from 'react-router-dom';
import back from '../../Images/back.png';
import logo from '../../Images/logo.png';
import google from '../../Images/google.png';
import './Login.css';

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
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

function LoginHeader() {
    const classes = useStyles();

    return(
        <div className={classes.root} >
            <AppBar position="static">
                <Toolbar>
                    <Link to='/'>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <img src={back} alt='back' width='30px' />
                        </IconButton>
                    </Link>
                    <Typography variant="h6" className={classes.title}>
                        Log In
                    </Typography>
                    <Link to='/register' className='link pointer white'>
                        <Button color="inherit">Register</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}

class Login extends React.Component {
	constructor() {
		super()
		this.state = {
			username: '',
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
		this.props.history.push('/option');
    }
    
    render() {
        return(
            <div>
                <LoginHeader />
                <div>
                    <img src={logo} alt='logo' height='100px' width='auto' />
                </div>
                <div className='row'>
                    <h4>Login with Social Media or Manually</h4>
                    <div className="vl">
                        <span className="vl-innertext">Or</span>
                    </div>
                    <div className='col'>
                        <button className="center google-btn">
                            <span role='img'><img src={google} alt='google' height='30px' /> Login with Google</span>
                        </button>
                    </div>
                    <form noValidate onSubmit={this.onSubmit}>
                        <div className="col">
                            <div>
                                <p>Or sign in manually:</p>
                            </div>   
                            <input type="text" name="username" placeholder="Username" required value={this.state.username} onChange={this.onChange} />
                            <input type="password" name="password" placeholder="Password" required value={this.state.password} onChange={this.onChange} />
                            <input type="submit" value="Login" />
                        </div>

                        <div className="mt3 mb4 col bottom-container signin">
                            <p>Don't have an account? <Link to='/register'>Sign Up</Link></p>
                        </div> 
                    </form>
                    <div className="text">
                        <p className='text'>"Life is like riding a bicycle, to stay balanced you must keep moving."</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;