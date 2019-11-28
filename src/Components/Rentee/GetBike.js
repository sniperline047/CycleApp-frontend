import React from 'react';
import {withRouter} from 'react-router-dom';
import {getSingleBike} from '../../Helpers/UserFunction';
import CircularProgress from '@material-ui/core/CircularProgress';

class Profile extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
            bicyclefrmNo: props.bicyclefrmNo,
            name: '',
            rating: '',
            mobileNo: '',
            email: '',
            company: '',
            model: '',
            color: '',  
            rollNo: '',
            bicycleUrl: '',
            load: true,
		}
    }

	componentDidMount() {
        getSingleBike(this.state.bicyclefrmNo).then(resp => {
            this.setState({
                name: resp.data[1].name,
                rating: resp.data[1].rating,
                mobileNo: resp.data[1].mobile,
                email: resp.data[1].email,
                company: resp.data[0].company,
                model: resp.data[0].model,
                color: resp.data[0].color,  
                rollNo: resp.data[0].rollNo,
                bicycleUrl: resp.data[0].bicycleUrl,
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

    render() {
        return(
            <div>
                <div>
                    <div className='center'>
                        <div className='cardBar2'>
                            {
                                this.state.load
                                ?
                                <CircularProgress />
                                :
                                <div>
                                    <div style={{position: 'relative', borderRadius: '50%', width: '100px'}} className='center mb4'>
                                        <img src={this.state.bicycleUrl} alt="profile pic" height='100%' width='100%' style={{borderRadius: '50%'}} />
                                        <input type='file' id='imageUpload' hidden='hidden' onChange={this.handleEditPicture} />
                                    </div>
                                    <div className='card mb4 w-90 center'>
                                        <div className='bb'>
                                            <p className='fl'>Bike:</p>
                                            <p className='fr'>{this.state.company + ' '}{this.state.model}</p>
                                        </div>
                                        <div className='bb'>
                                            <p className='fl'>Owner:</p>
                                            <p className='fr'>{this.state.name}</p>
                                        </div>  
                                        <div className='bb'>
                                            <p className='fl'>Email:</p>
                                            <p className='fr'>{this.state.email}</p>
                                        </div>  
                                        <div className='bb'>
                                            <p className='fl'>Mobile:</p>
                                            <p className='fr'>{this.state.mobileNo}</p>
                                        </div> 
                                        <div className='bb'>
                                            <p className='fl'>Rating:</p>
                                            <p className='fr'>{this.state.rating}</p>
                                        </div>  
                                        <div>
                                            <p className='fl'>Bike's Color:</p>
                                            <p className='fr'>{this.state.color}</p>
                                        </div>  
                                    </div>
                                </div>
                            }
                            <button className='white b pv2 ph3 bg-gold hover-bg-mid-gray bn br-pill lgt-btn'>Call/Mail</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Profile);
