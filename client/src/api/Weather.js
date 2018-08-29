import {WEATHER_API_KEY} from '../config/Constants'
var request = require('request');

export const getWeather = (zip,country_code) => {
    const options = {
        url: `https://api.openweathermap.org/data/2.5/weather?zip=${zip},${country_code}&appid=${WEATHER_API_KEY}&units=metric`,
        method: 'GET'
    }
    return new Promise((resolve,rej)=>{
        request(options,(err,res,body)=>{
            if (err) rej(err)
            resolve(JSON.parse(body))
        })
    })
}

export const getLocationFromIp = () => {
    const options = {
        url: 'https://ipapi.co/json/',
        method: 'GET'
    }
    return new Promise((resolve,rej)=>{
        request(options,(err,res,body)=>{
            if (err) rej(err)
            resolve(JSON.parse(body))
        })
    })
}