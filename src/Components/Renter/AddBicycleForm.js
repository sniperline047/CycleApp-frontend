import React from 'react';
import './Renter.css';
import {addBicycle, validateForm} from '../../Helpers/UserFunction';
import {withRouter} from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';

class AddBicycleForm extends React.Component {
    constructor() {
        super();
        this.state = {
            company: null,
            model: null,
            color: null,
            bicyclefrmNo: null,
            errors: {
                company: '',
                model: '',
                color: '',
                bicyclefrmNo: '',
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
            case 'company':
                errors.company = 
                value.length < 1
                    ? 'Required'
                    : '';
                break;
            case 'model':
                errors.model = 
                value.length < 1
                    ? 'Required'
                    : '';
                break;
            case 'bicyclefrmNo':
                errors.bicyclefrmNo = 
                value.length < 1
                    ? 'Required'
                    : '';
                break;
            case 'color':
                errors.color = 
                value.length < 1
                    ? 'Required'
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
        if(validateForm(this.state.errors)&&((this.state.company) !== null)) {
            const bicycle = {
                company: this.state.company,
                model: this.state.model,
                color: this.state.color,
                bicyclefrmNo: this.state.bicyclefrmNo
            }

            addBicycle(bicycle)
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

        return (
            <div>
                {
                    this.state.load
                    ?
                    <div className='mt3'>
                        <CircularProgress />
                    </div>
                    :
                    <div>
                        <p className="name f3 pa3 w-50 bt bb br br3 br--right white bg-blue">
                            Add a Bicyle
                        </p>
                        <div className='center'>
                            <div id="form-div">
                                <form className="montform" id="reused_form" onSubmit={this.onSubmit}>
                                    <p className="name">
                                        <input name="company" type="text" className="feedback-input" placeholder="Company" required onChange={this.onChange} noValidate/>
                                        {errors.company.length > 0 && 
                                            <span className='error f4'>{errors.company}</span>}
                                    </p>
                                    <p className="email">
                                        <input name="model" type="text" className="feedback-input" placeholder="Model" required onChange={this.onChange} noValidate/>
                                        {errors.model.length > 0 && 
                                            <span className='error f4'>{errors.model}</span>}
                                    </p>
                                    <p className="text">
                                        <input name="bicyclefrmNo" type="text" className="feedback-input" placeholder="Frame No" required onChange={this.onChange} noValidate/>
                                        {errors.bicyclefrmNo.length > 0 && 
                                            <span className='error f4'>{errors.bicyclefrmNo}</span>}
                                    </p>
                                    <p className="text">
                                        <input name="color" type="text" className="feedback-input" placeholder="Color" required onChange={this.onChange} noValidate/>
                                        {errors.color.length > 0 && 
                                            <span className='error f4'>{errors.color}</span>}
                                    </p>
                                    <div className="submit">
                                        <button type="submit" className="button-blue">SUBMIT</button>
                                        <div className="ease"></div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default withRouter(AddBicycleForm);