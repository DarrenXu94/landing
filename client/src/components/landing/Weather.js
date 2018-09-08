import React, { Component, Fragment } from 'react';
import { getWeather, getLocationFromIp } from '../../api/Weather'
import MyContext from '../../MyContext'
import RunOnLifecycle from '../../RunOnLifecycle'

const MILLIS_BEFORE_NEXT_UPDATE = 10000

class Weather extends Component {
    constructor() {
        super();
        this.state = {
            weather: null,
            location: null
        };
    }

    loadWeather = (values) => {
        return new Promise((res,rej)=>{
            if (new Date() - new Date(values.updatedAt) > MILLIS_BEFORE_NEXT_UPDATE) {
                getLocationFromIp()
                .then((res) => {
                    this.setState({ location: res })
                    return getWeather(res.postal, res.country)
                })
                .then((result) => {
                    this.setState({ weather: result })
                    res(true)
                })
            } else {
                this.setState({ location: values.update.location, weather: values.update.weather })
                res(false)
            }
        })
        
        
    }

    componentWillMount() {
        // Somehow get the context here
        
    }
    render() {
        return (
            <MyContext.Consumer>
                {(context) =>
                    <RunOnLifecycle
                        runOnMount={() => { 
                            this.loadWeather(context.state)
                            .then((res)=>{
                                if (res) context.updateFunction(this.state)
                            })
                        }}
                        {...this.props}
                    >
                        <Fragment>
                            {(this.state.weather && this.state.location) &&
                                <Fragment>
                                    <p>
                                        {this.state.location.region}
                                    </p>
                                    <h3>
                                        Weather forecast says <b>{this.state.weather.weather[0].description}</b>
                                    </h3>
                                    <img
                                        src={`http://openweathermap.org/img/w/${this.state.weather.weather[0].icon}.png`}
                                        alt="Weather"
                                        style={{ height: '35px' }}
                                    />
                                    <h4 style={{ marginTop: '0px' }}>
                                        Feeling like <b>{this.state.weather.main.temp}&deg;C</b>
                                    </h4>
                                </Fragment>
                            }
                        </Fragment>
                    </RunOnLifecycle>
                }
            </MyContext.Consumer>
        );
    }
}

export default Weather;