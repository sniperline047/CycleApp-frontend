import React from 'react';
import './Renter.css';
import {addAvailibility, validateForm} from '../../Helpers/UserFunction';
import CircularProgress from '@material-ui/core/CircularProgress';
import {withRouter} from 'react-router-dom';

class BicycleAvail extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			startTime: null,
			endTime: null,
			price: null,
            caption: null,
            bicyclefrmNo: props.bicyclefrmNo,
            errors: {
                startTime: '',
                endTime: '',
                price: '',
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
            case 'startTime':
                errors.startTime = 
                value.length < 1
                    ? 'Required'
                    : '';
                break;
            case 'endTime':
                    errors.endTime = 
                    value.length < 1
                        ? 'Required'
                        : '';
                    break;
            case 'price': 
                errors.price = 
                    (value.length < 1)
                    ? 'Price cannot be empty!'
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
        if(validateForm(this.state.errors)&&((this.state.price) !== null)) {
            const bicycle = {
                startTime: this.state.startTime,
                endTime: this.state.endTime,
                price: this.state.price,
                caption: this.state.caption
            }

            addAvailibility(bicycle,this.state.bicyclefrmNo)
            .then(resp => {
                this.setState({load: false});
                if (resp.data) {
                    alert(resp.data.message)
                    this.props.history.push('/dashboard/lease/?name=rides');
                }
            })
            .catch((err) => {
                this.setState({load: false});
                if(err.response) {
                    console.log(err.response.data.error);
                    alert(err.response.data.error);
                }
                else {
                    alert('Could not add at this moment');
                    console.log(err);
                }
            })
        } else{
            alert('Invalid Form Data');
            this.setState({load: false})
            console.error('Invalid Form Data')
        }  
    }
    
    render() {
        const {errors} = this.state;

        return(
            <div className='App'>
                {
                    this.state.load
                    ? 
                    <div className='mt3'>
                        <CircularProgress />
                    </div>
                    :
                    <div>     
                        <p className="name f3 pa3 w-50 bt bb br br3 br--right white bg-blue">
                            Rent a Bicyle
                        </p>
                        <form noValidate onSubmit={this.onSubmit} className='center'>
                            <div className="container">       
                                <div>
                                    <label><b>Start Time</b></label>
                                    <input type="datetime-local" placeholder="Start Time" name="startTime" required onChange={this.onChange} />
                                    {errors.startTime.length > 0 && 
                                        <span className='error f4'>{errors.startTime}</span>}
                                </div>
        
                                <div>
                                    <label><b>End Time</b></label>
                                    <input type="datetime-local" placeholder="End Time" name="endTime" required onChange={this.onChange} />
                                    {errors.endTime.length > 0 && 
                                        <span className='error f4'>{errors.endTime}</span>}
                                </div>
        
                                <div>
                                    <label><b>Price</b></label>
                                    <input type="number" placeholder="Price" name="price" required onChange={this.onChange} noValidate/>
                                    {errors.price.length > 0 && 
                                        <span className='error f4'>{errors.price}</span>}
                                </div>
                                
                                <div>
                                    <label><b>Caption</b></label>
                                    <input type="text" placeholder="Caption" name="caption" onChange={this.onChange} noValidate/>
                                </div>
                                <hr/>            
                                <button type="submit" className="registerbtn">Add</button>
                            </div>    
                        </form> 
                    </div>
                }
            </div>
        );
    }
}

export default withRouter(BicycleAvail);