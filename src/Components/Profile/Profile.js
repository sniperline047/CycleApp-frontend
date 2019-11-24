import React from 'react';
import './Profile.css';
import {withRouter} from 'react-router-dom';
import {userProfile, userImage} from '../../Helpers/UserFunction';
import CircularProgress from '@material-ui/core/CircularProgress';
import CreateRoundedIcon from '@material-ui/icons/CreateRounded';
import Tooltip from '@material-ui/core/Tooltip/Tooltip';

class Profile extends React.Component {
	constructor() {
		super()
		this.state = {
			first_name: '',
			last_name: '',
            mob: '',
            email: '',
            rating: 0,
            ratingCount: 0,
            imageUrl: '',
            load: true,
		}
    }

	logOut = (event) => {
		event.preventDefault()
		localStorage.removeItem('usertoken')
		this.props.history.push('/')
	}

	async componentDidMount() {
        userProfile().then(resp => {
            this.setState({
                first_name: resp.data.firstName,
                last_name: resp.data.lastName,
                email: resp.data.email,
                mob: resp.data.mobileNo,
                rating: resp.data.rating,
                ratingCount: resp.data.ratingCount,
                imageUrl: resp.data.imageUrl,
                load: false,
            })
        })
        .catch((err) => {
            this.setState({load: false});
            if(err.response.data.code === 'auth/id-token-expired' || err.response.data.error === 'Unauthorized') {
                alert('SESSION TIMED OUT, LOGIN AGAIN');
                this.logOut.bind(this);
            } else {
                console.log(err.response.data);
                alert('Something went wrong');
            }
        })
    }

    handleEditPicture = (event) => {
        const image = event.target.files[0];
        const formData = new FormData();
        formData.append('image', image, image.name);
        userImage(formData)
        .then(resp => {
            if(resp.data.message) {
                this.setState({imageUrl: resp.data.url})
                alert(resp.data.message);
            }
        })
        .catch((err) => {
            alert('Something went wrong');
        })
    }

    handleImageChange = () => {
        const fileInput = document.getElementById('imageUpload');
        fileInput.click(); 
    }

    render() {
        return(
            <div>
                <div>
                    <div className='center topContainer'>
                        <div className='cardBar'>
                            {
                                this.state.load
                                ?
                                <CircularProgress />
                                :
                                <div>
                                    <div style={{position: 'relative', borderRadius: '50%', width: '100px'}} className='center mb4'>
                                        <img src={this.state.imageUrl} alt="profile pic" height='100%' width='100%' style={{borderRadius: '50%'}} />
                                        <input type='file' id='imageUpload' hidden='hidden' onChange={this.handleEditPicture} />
                                        <Tooltip title='Edit profile picture' placement='top' >
                                            <CreateRoundedIcon color='primary' className='change-btn ba grow' onClick={this.handleImageChange} />
                                        </Tooltip>
                                    </div>
                                    <div className='card mb4 w-90 center'>
                                        <div className='bb'>
                                            <p className='fl'>Name:</p>
                                            <p className='fr'>{this.state.first_name + ' '}{this.state.last_name}</p>
                                        </div>
                                        <div className='bb'>
                                            <p className='fl'>Email:</p>
                                            <p className='fr'>{this.state.email}</p>
                                        </div>  
                                        <div className='bb'>
                                            <p className='fl'>Mobile:</p>
                                            <p className='fr'>{this.state.mob}</p>
                                        </div> 
                                        <div>
                                            <p className='fl'>Rating:</p>
                                            <p className='fr'>{this.state.rating}/{this.state.ratingCount}</p>
                                        </div>  
                                    </div>
                                </div>
                            }
                            <button className='white b pv2 ph3 bg-gold hover-bg-mid-gray bn br-pill lgt-btn' onClick={this.logOut.bind(this)}>Log Out</button>
                        </div>
                    </div>
                    <br/>
                    <div className='copyright-info tc'>
                        <p><a href='https://github.com/sniperline047/CycleApp-frontend' className='link pointer'>sniperline047</a>.All rights reserved © 2019-2021</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Profile);
