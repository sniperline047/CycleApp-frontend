import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Rentee.css';

class Rentee extends Component {
    constructor() {
        super();
        this.state = {
            start_time: '',
            end_time: '',
            date: '',
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
            <div className='main'>
                <p className='pl1 tl f1'>Find A Bike</p>
                <div className='container1'>
                    <form noValidate onSubmit={this.onSubmit}>
                        <label for="start_time">Start Time</label>
                        <input type="time" id="stime" name="start_time" placeholder="Start Time" value={this.state.start_time} onChange={this.onChange} />
                    
                        <label for="end_time">End Time</label>
                        <input type="time" id="etime" name="end_time" placeholder="End Time" value={this.state.end_time} onChange={this.onChange}/>
                    
                        <label for="date">Date</label>
                        <input type="date" id="dt" name="date" placeholder="Date" value={this.state.date} onChange={this.onChange}/>
                    
                        <input type="submit" value="Find" />
                    </form>
                </div>
                <hr/>
                <p className='h1'>OR</p>
                <hr/>
                <Link to='/option'>
                    <button class="white b pv2 ph3 bg-gold hover-bg-mid-gray bn br-pill">
                        Go Back
                    </button>
                </Link>
            </div>
        );
    }
}

export default Rentee;