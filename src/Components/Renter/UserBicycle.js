import React from 'react';
import './Renter.css';
import CardList from './CardList.js';
import {withRouter} from 'react-router-dom';
import {userBicycle, bicycleImage} from '../../Helpers/UserFunction';
import CircularProgress from '@material-ui/core/CircularProgress';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

class UserBicycle extends React.Component {
    constructor() {
        super();
        this.state = {
            list: [],
            load: true,
            header: '',
            index: 0,
        }
    }


	logOut = () => {
		localStorage.removeItem('usertoken')
		this.props.history.push('/')
	}

    async componentDidMount() {
        userBicycle()
        .then((resp) => {
            this.setState({load: false});
            if(resp.data) {
                this.setState({list: resp.data});
            }
        })
        .catch((err) => {
            this.setState({load: false});
            if(err.response.data.code === 'auth/id-token-expired' || err.response.data.error === 'Unauthorized') {
                alert('SESSION TIMED OUT, LOGIN AGAIN');
                this.logOut();  
            } else {
                console.log(err.response.data);
                alert('Something went wrong');
            }
        })
    }

    handleEditPicture = async (event) => {
        const image = await event.target.files[0];
        const formData = new FormData();
        formData.append('image', image, image.name);
        bicycleImage(formData,this.state.header)
        .then(resp => {
            if(resp.data.message) {
                alert(resp.data.message);
            }
        })
        .catch((err) => {
            if(err.response) {
                if(err.response.data.code === 'auth/id-token-expired') {
                    alert('SESSION TIMED OUT, LOGIN AGAIN');
                    this.logOut();
                } else {
                    console.log(err.response.data);
                    alert('Something went wrong');
                }
            } else {
                console.log(err.response);
            }
        })
    }

    handleImageChange = (bicyclefrmNo) => {
        this.setState({header: bicyclefrmNo});
        const fileInput = document.getElementById('imageUpload');
        fileInput.click(); 
    }

    render() {
        const {list} = this.state;
        return(
            <div className='mt3'>
                {
                    this.state.load
                    ?
                    <CircularProgress />
                    :
                    <div>
                        {
                            (list).length
                            ?
                            list.map((cycle,index) => {
                                return (
                                    <CardList 
                                        key={index} 
                                        company={list[index].company} 
                                        model={list[index].model} 
                                        bicyclefrmNo={list[index].bicyclefrmNo}
                                        color={list[index].color}
                                        leased={list[index].leased}
                                        bicycleUrl={list[index].bicycleUrl}
                                        availibility={list[index].availibility}
                                        handleEditPicture={this.handleEditPicture}
                                        handleImageChange={this.handleImageChange}
                                    />
                                );
                            })
                            :
                            <p className='light-silver f6 georgia'>No bicycle added, click on <span><Fab color="secondary" size='small' style={{cursor: 'none'}}><AddIcon/></Fab></span>(below) to add one.</p>
                        }
                    </div>
                }
            </div>
        );
    }
}

export default withRouter(UserBicycle);
