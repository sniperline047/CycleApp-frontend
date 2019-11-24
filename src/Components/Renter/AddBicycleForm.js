import React from 'react';
import './Renter.css';
// import {Link} from 'react-router-dom';

export default class AddBicycleForm extends React.Component {
    constructor() {
        super();
        this.state = {
            company: '',
            model: '',
            color: '',
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this) 
    }
    
    onChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }
    
    onSubmit = (event) => {
        event.preventDefault()

        this.props.history.push('/list');
    }
    
    render() {
        return (
            <div>
                <p className="name f3 pa3 w-50 bt bb br br3 br--right white bg-blue">
                    Add a Bicyle
                </p>
                <div className='center'>
                    <div id="form-div">
                        <form className="montform" id="reused_form" onSubmit={this.onSubmit}>
                            <p className="name">
                                <input name="company" type="text" className="feedback-input" required placeholder="Company" />
                            </p>
                            <p className="email">
                                <input name="model" type="text" required  className="feedback-input" placeholder="Model" />
                            </p>
                            <p className="text">
                                <input name="color" type="text" className="feedback-input" placeholder="Color" />
                            </p>
                            <p className="file">
                                <input name="bicycleUrl" type="file" className="feedback-input" />
                            </p>
                            <div className="submit">
                                <button type="submit" className="button-blue">SUBMIT</button>
                                <div className="ease"></div>
                            </div>
                        </form>
                        <div id="error_message" style={{width:'100%', height:'100%', display:'none'}}>
                            <h4>Error</h4>
                            Sorry there was an error sending your form.
                        </div>
                        <div id="success_message" style={{width:'100%', height:'100%', display:'none'}}>
                            <h2>Success! Your Message was Sent Successfully.</h2>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
