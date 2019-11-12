import React, {Component} from 'react';
import './Rentee.css';
import {withRouter} from 'react-router-dom';

class Rentee extends Component {
    constructor() {
        super();

        var today = new Date(),
        date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

        this.state = {
            start_time: '10:00',
            end_time: '12:00',
            date: date,
        }

            this.onChange = this.onChange.bind(this)
            this.onSubmit = this.onSubmit.bind(this) 
    }
    
    onChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }
    
    onSubmit = (event) => {
        event.preventDefault()
        this.props.history.push('/dashboard/list?name=rides');
    }

    render() {
        return(
            <div className='App dashboard center'>
                <div>
                    <p className='pl1 tl f1'>Find A Bike</p>
                    <form noValidate onSubmit={this.onSubmit} className='center'>
                        <div className='containerBox'>
                            <label>Start Time</label>
                            <input type="time" id="stime" name="start_time" placeholder="Start Time" value={this.state.start_time} onChange={this.onChange} />
                        
                            <label>End Time</label>
                            <input type="time" id="etime" name="end_time" placeholder="End Time" value={this.state.end_time} onChange={this.onChange}/>
                        
                            <label>Date</label>
                            <input type="date" id="dt" name="date" placeholder="Date" value={this.state.date} onChange={this.onChange}/>
                        
                            <input type="submit" value="Find" />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(Rentee);