import React, {Component} from 'react';
import './Rentee.css';
import CardListAvail from './CardListAvail';
import CircularProgress from '@material-ui/core/CircularProgress';
import {getBicycleAvail} from '../../Helpers/UserFunction';
import Button from '@material-ui/core/Button';

class Rentee extends Component {
    constructor() {
        super();

        var today = new Date(),
        date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

        this.state = {
            startTime: '10:00',
            endTime: '12:00',
            date: date,
            requested: false,
            load: false,
            list: [],
        }
    }
    
    onChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    onSubmit = async (event) => {
        event.preventDefault();
        this.setState({load:true});
        const data = {
            startTime: this.state.date + 'T' + this.state.startTime,
            endTime: this.state.date + 'T' + this.state.endTime
        }
        getBicycleAvail(data)
        .then((resp) => {
            if(resp.data) {
                this.setState({list: resp.data});
                this.setState({requested: true});
                this.setState({load: false});
            }
        })
        .catch(err => {
            this.setState({load: false});
            console.log(err.response);
        })
    }

    render() {
        const {list} = this.state;

        return(
            <div className='App dashboard center'>
                {
                    this.state.load
                    ?
                    <div className='mt3'>
                        <CircularProgress/>
                    </div>
                    :
                    <div>
                        {
                            this.state.requested
                            ?
                            <div>
                                {
                                    (list).length
                                    ?
                                    list.map((cycle,index) => {
                                        return (
                                            <CardListAvail 
                                                key={index} 
                                                startTime={(list[index].startTime).split('T')[1]}
                                                endTime={(list[index].endTime).split('T')[1]} 
                                                caption={list[index].caption}
                                                bicyclefrmNo={list[index].bicyclefrmNo}
                                                price={list[index].price}
                                                rating={list[index].rating}
                                                rollNo={list[index].rollNo}
                                            />
                                        );
                                    })
                                    :
                                    <p className='light-silver f6 georgia'>No bicycle Available in this slot, Go back</p>
                                }
                                <Button variant="contained" color="default" size="small" onClick={() => {this.setState({requested: false})}}>
                                    Back
                                </Button>
                            </div>
                            :
                            <div>
                                <p className='pl1 tl f1'>Find A Bike</p>
                                <form className='center' noValidate onSubmit={this.onSubmit}>
                                    <div className='containerBox'>
                                        <label>Start Time</label>
                                        <input type="time" id="stime" name="startTime" placeholder="Start Time" value={this.state.startTime} onChange={this.onChange} />
                                    
                                        <label>End Time</label>
                                        <input type="time" id="etime" name="endTime" placeholder="End Time" value={this.state.endTime} onChange={this.onChange}/>
                                    
                                        <label>Date</label>
                                        <input type="date" id="dt" name="date" placeholder="Date" value={this.state.date} min="2019-11-28" max="2019-11-30" onChange={this.onChange}/>
            
                                        <input type="submit" value="Find" />
                                    </div>
                                </form>
                            </div>
                        }
                    </div>
                }
            </div>
        );
    }
}

export default Rentee;
