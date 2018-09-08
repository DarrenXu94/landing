import React, { Component, Fragment } from 'react';
import { getWeather, getLocationFromIp } from '../../api/Weather'
import MyContext from '../../MyContext'

class Weather extends Component {
    constructor() {
        super();
        this.state = {
            weather: null,
            location: null
        };
    }

    componentWillMount() {
        // Somehow get the context here
        getLocationFromIp()
            .then((res) => {
                this.setState({ location: res })
                return getWeather(res.postal, res.country)
            })
            .then((result) => {
                this.setState({ weather: result })
            })
    }
    render() {
        return (
            <MyContext.Consumer>
                {(context) => (
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
                    {/* {context.updateFunction(this.state)} */}
                    {/* {console.log(context.state.update)} */}

                </Fragment>
                )}
            </MyContext.Consumer>
        );
    }
}

export default Weather;