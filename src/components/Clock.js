import React, { Component } from 'react';
import Moment from 'react-moment';

class Clock extends Component {
    constructor() {
        super();
        this.state = {
            date: new Date()
        };
        this.updateTime = this.updateTime.bind(this)
    }
    updateTime(){
        var date = new Date()
        this.setState({date: date.setSeconds(date.getSeconds() + 1)})
    }

    componentDidMount(){
        setInterval(this.updateTime, 1000);
    }


    render() {
        return (
            <Moment interval={5000} format={'MMMM Do YYYY, h:mm:ss a'}>
                {this.state.time}
            </Moment>
        );
    }
}

export default Clock;