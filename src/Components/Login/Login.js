import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../Images/logo.png';
import './Login.css';
import Header from '../Header';
import GoogleBtn from '../GoogleBtn/GoogleBtn';
import {login} from '../../Helpers/UserFunction';
import {LoadingMessage} from '../../HOC/withSplashScreen';

export default class Login extends React.Component {
	constructor() {
		super()
		this.state = {
			email: '',
            password: '',
            load: false,
		}
		
		this.onChange = this.onChange.bind(this)
		this.onSubmit = this.onSubmit.bind(this) 
	}

	onChange = (event) => {
		this.setState({[event.target.name]: event.target.value});
	}
	
	onSubmit = (event) => {
        event.preventDefault()
        if(this.state.email === '' || this.state.password === '') {
            alert('Fields cannot be empty');
        }else {
            this.setState({load: true});
            const user = {
                email: this.state.email,
                password: this.state.password
            }
            
            login(user).then(res => {
                this.setState({load: false});
                if(res) {
                    this.props.history.push('/dashboard?name=dashboard');
                } else {
                    alert("Wrong Credentials!");
                }
            })
        }
    }

    onGoogleClick = () => {
        return alert(`Can't connect to Google server right now.`);
    }
    
    render() {
        return(
            <div className='App'>
                {
                    this.state.load
                    ? 
                    <LoadingMessage />
                    : <div>
                        <Header name='Login'/>
                        <div>
                            <div>
                                <img src={logo} alt='logo' height='100px' width='auto' />
                            </div> 
                            <GoogleBtn onGoogleClick={this.onGoogleClick} />
                            <p className='text'><span>━━━━━━</span> OR <span>━━━━━━</span></p>
                            <form noValidate onSubmit={this.onSubmit} className='center'>
                                <div className="container">
                                    <p>Log In Manually.</p>
            
                                    <hr/>
                                    <label><b>Email</b></label>
                                    <input type="text" placeholder="Enter Email" name="email" value={this.state.email} onChange={this.onChange} />
                                
                                    <label><b>Password</b></label>
                                    <input type="password" placeholder="Enter Password" name="password" value={this.state.password} onChange={this.onChange} />
                                    <hr/>
                                
                                    <p>Forgot Password? <Link to='/'>Reset password</Link></p>                     
                                    <button type="submit" className="loginbtn">Log In</button>
                                </div>    
                            </form>
                            <div className="p4 login center w-100">
                                <p>Don't have an account? <Link to='/register'>Register</Link></p>
                            </div> 
                        </div>
                    </div>
                }
            </div>
        );
    }
}
