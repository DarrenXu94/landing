import { FOOTBALL_KEY } from '../config/Constants'
var request = require('request');

const epl_id = '2021'

var url = `http://api.football-data.org/v2/competitions/${epl_id}/standings`

const options = {
    url: url,
    method: 'GET',
    headers: {
        'X-Auth-Token': FOOTBALL_KEY
    }
}
export const getEPLTable = () => {
    return new Promise((res,rej)=>{
        request(options,(err,result,body)=>{
            if (err) rej(err)
            var jsonBody = JSON.parse(body)
            var table = jsonBody.standings[0].table
        
            res(table)
        })
    })

}