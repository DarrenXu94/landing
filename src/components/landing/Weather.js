import React, { Component, Fragment } from 'react';
import { getWeather } from '../../api/Weather'

class Weather extends Component {
    constructor() {
        super();
        this.state = {
            weather: null
        };
        this.handleResult = this.handleResult.bind(this)
    }

    handleResult(result) {
        const temp = result.list[0]
        console.log(temp)
        this.setState({ weather: temp })
    }

    componentWillMount() {
        getWeather()
            .then((result) => {
                this.handleResult(result)
            })
    }
    render() {
        return (
            <Fragment>
                {this.state.weather &&
                    <Fragment>
                        <h3>
                            Weather forecast says <b>{this.state.weather.weather[0].description}</b>
                        </h3>
                        <img 
                            src={`http://openweathermap.org/img/w/${this.state.weather.weather[0].icon}.png`} 
                            alt="Weather"
                            style={{height: '35px'}}
                        />
                        <h4 style={{marginTop: '0px'}}>
                            Feeling like <b>{this.state.weather.main.temp}&deg;C</b>
                        </h4>
                    </Fragment>

                }
            </Fragment>
        );
    }
}

export default Weather;