import React from 'react';
import './Profile.css';
import profile from '../../Images/prof.jpg';
import {withRouter} from 'react-router-dom';
import jwt_decode from 'jwt-decode';

class Profile extends React.Component {
	constructor() {
		super()
		this.state = {
			first_name: '',
			last_name: '',
            mob: '',
            email: '',
		}
	}

	componentDidMount() {
		const token = localStorage.usertoken
		const decoded = jwt_decode(token)
		this.setState({
			first_name: decoded.firstname,
			last_name: decoded.lastname,
            email: decoded.email,
            mob: decoded.mobile,
		})
    }
    
	logOut = (event) => {
		event.preventDefault()
		localStorage.removeItem('usertoken')
		this.props.history.push('/')
	}

    render() {
        return(
            <div>
                <div className='center topContainer'>
                    <div className='cardBar'>
                        <img src={profile} alt="profile pic" className='profile-img'/>
                        <div className='card'>
                            <p>{this.state.email}</p>
                            <hr className='w-80'/>
                            <p>{this.state.first_name + ' '}{this.state.last_name}</p>
                            <hr className='w-80'/>  
                            <p>{this.state.mob}</p> 
                        </div>
                        <button className='white b pv2 ph3 bg-gold hover-bg-mid-gray bn br-pill' onClick={this.logOut.bind(this)}>Log Out</button>
                    </div>
                </div>
                <div className='copyright-info'>
                    <p><a href='https://github.com/sniperline047/CycleApp-frontend' className='link pointer'>sniperline047</a>.All rights reserved © 2019-2021</p>
                </div>
            </div>
        );
    }
}

export default withRouter(Profile);
