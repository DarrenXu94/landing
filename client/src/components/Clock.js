import React, { Component } from 'react';
import Moment from 'react-moment';

class Clock extends Component {
    constructor() {
        super();
        this.state = {
            date: new Date()
        };
    }
    updateTime = () => {
        if (this.update){
            var date = new Date()
            this.setState({date: date.setSeconds(date.getSeconds() + 1)})
        }
    }

    componentWillMount(){
        this.update = true
        setInterval(this.updateTime, 1000);
    }

    componentWillUnmount(){
        this.update = false
        this.setState({update: false})
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