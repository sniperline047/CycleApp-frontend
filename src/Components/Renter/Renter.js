import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Renter.css';

class Renter extends Component {
    constructor() {
        super();
        this.state = {

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
        return(
            <div>
                <p className="name f3">
                    Add a Bicyle
                </p>
                <div id="form-main">
                    <div id="form-div">
                        <form className="montform" id="reused_form" onSubmit={this.onSubmit}>
                            <p className="name">
                                <input name="name" type="text" className="feedback-input" required placeholder="Name" id="name" />
                            </p>
                            <p className="email">
                                <input name="email" type="email" required  className="feedback-input" id="email" placeholder="Email" />
                            </p>
                            <p className="text">
                                <textarea name="message" className="feedback-input" id="comment" placeholder="Description"></textarea>
                            </p>
                            <p className="file">
                                <input name="image" type="file" id="file" className="feedback-input" />
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
                <hr/>
                <p className='h1'>OR</p>
                <hr/>
                <Link to='/dashboard/rides'>
                    <button className="white b pv2 ph3 bg-gold hover-bg-mid-gray bn br-pill mt2">
                        Go Back
                    </button>
                </Link>
            </div>
        );
    }
}

export default Renter;