import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../Images/logo.png';
import './Register.css';
import Header from '../Header';
import GoogleBtn from '../GoogleBtn/GoogleBtn';
import {register, validateForm, validEmailRegex} from '../../Helpers/UserFunction';
import {LoadingMessage} from '../../HOC/withSplashScreen';


class Register extends React.Component {
	constructor() {
		super()
		this.state = {
			first_name: null,
			last_name: null,
			rollNo: null,
			mob: null,
			email: null,
            password: null,
            errors: {
                first_name: '',
                last_name: '',
                mob: '',
                email: '',
                password: '',
                rollNo: '',
            },
            load: false
		}

		this.onChange = this.onChange.bind(this)
		this.onSubmit = this.onSubmit.bind(this) 
	}

    onChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;
    
        switch (name) {
            case 'first_name':
                errors.first_name = 
                value.length < 2
                    ? 'Required'
                    : '';
                break;
            case 'last_name':
                    errors.last_name = 
                    value.length < 2
                        ? 'Required'
                        : '';
                    break;
            case 'mob': 
                errors.mob = 
                    (value.length < 10 || value.length > 10)
                    ? 'Mobile Number must be 10 characters long!'
                    : '';
                break;
            case 'rollNo': 
                errors.rollNo = 
                    (value.length < 9 || value.length > 9)
                    ? 'Enter Correct Roll Number!'
                    : '';
                break;
            case 'email': 
                errors.email = 
                    validEmailRegex.test(value)
                        ? ''
                        : 'Email is not valid!';
                break;
            case 'password': 
                errors.password = 
                    value.length < 8
                        ? 'Password must be 8 characters long!'
                        : '';
                break;
            default:
                break;
        }
    
        this.setState({errors, [name]: value});
    }
	
	onSubmit = (event) => {
        event.preventDefault()
        this.setState({load: true});
        if(validateForm(this.state.errors)) {
            const user = {
                firstName: this.state.first_name,
                lastName: this.state.last_name,
                rollNo: this.state.rollNo,
                mobileNo: this.state.mob,
                email: this.state.email,
                password: this.state.password,
            }

            register(user)
            .then(resp => {
                this.setState({load: false});
                if (resp.statusText === 'Created') {
                    alert(resp.data.message)
                    this.props.history.push('/login');
                }
                else {
                    alert('Could not register at this moment');
                }
            })
            .catch((err) => {
                this.setState({load: false});
                console.log(err.response.data);
                alert(err.response.data);
            })
        } else{
            console.error('Invalid Form')
        }  
    }

    onGoogleClick = () => {
        return alert(`Can't connect to Google server right now.`);
    }
    
    render() {
        const {errors} = this.state;

        return(
            <div className='App'>
                <Header name='Register'/>
                {
                    this.state.load
                    ? 
                    <LoadingMessage />
                    :
                    <div>
                        <div>
                            <img src={logo} alt='logo' height='100px' width='auto' />
                        </div> 
                        <GoogleBtn onGoogleClick={this.onGoogleClick} />
                        <p className='text'><span>━━━━━━</span> OR <span>━━━━━━</span></p>
        
                        <form noValidate onSubmit={this.onSubmit} className='center'>
                            <div className="container">
                                <p>Please fill in this form to create an account.</p>
                                <hr/>
        
                                <div>
                                    <label><b>First Name</b></label>
                                    <input type="text" placeholder="First Name" name="first_name" required onChange={this.onChange} />
                                    {errors.first_name.length > 0 && 
                                        <span className='error f4'>{errors.first_name}</span>}
                                </div>
        
                                <div>
                                    <label><b>Last Name</b></label>
                                    <input type="text" placeholder="Last Name" name="last_name" required onChange={this.onChange} />
                                    {errors.last_name.length > 0 && 
                                        <span className='error f4'>{errors.last_name}</span>}
                                </div>
        
                                <div>
                                    <label><b>Roll No.</b></label>
                                    <input type="number" placeholder="Roll Number" name="rollNo" required onChange={this.onChange} noValidate/>
                                    {errors.rollNo.length > 0 && 
                                        <span className='error f4'>{errors.rollNo}</span>}
                                </div>
        
                                <div>
                                    <label><b>Modile Number</b></label>
                                    <input type="number" placeholder="Modile Number" name="mob" required onChange={this.onChange} noValidate/>
                                    {errors.mob.length > 0 && 
                                        <span className='error f4'>{errors.mob}</span>}
                                </div>
                                
                                <div>
                                    <label><b>Email</b></label>
                                    <input type="text" placeholder="Enter Email" name="email" required onChange={this.onChange} noValidate/>
                                    {errors.email.length > 0 && 
                                        <span className='error f4'>{errors.email}</span>}
                                </div>
                            
                                <div>
                                    <label><b>Password</b></label>
                                    <input type="password" placeholder="Enter Password" name="password" required onChange={this.onChange} noValidate/>
                                    {errors.password.length > 0 && 
                                        <span className='error f4'>{errors.password}</span>}
                                </div>
                                <div className='info'>
                                    <small>Password must be eight characters in length.</small>
                                </div>
                                <hr/>
                            
                                <p>By creating an account you agree to our <Link to='/'>Terms & Privacy</Link></p>                     
                                <button type="submit" className="registerbtn">Register</button>
                            </div>    
                        </form>
                        
                        <div className="container signin center w-100">
                            <p>Already have an account? <Link to='/login'>Log in</Link></p>
                        </div> 
                    </div>
                }
            </div>
        );
    }
}

export default Register;
