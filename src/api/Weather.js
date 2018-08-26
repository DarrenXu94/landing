var request = require('request');

const api_key = '63c490a6c65bcef38ecf199e746d8684'

export const getWeather = (zip,country_code) => {
    const options = {
        url: `https://api.openweathermap.org/data/2.5/weather?zip=${zip},${country_code}&appid=${api_key}&units=metric`,
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