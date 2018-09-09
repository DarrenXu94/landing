// http://api.cortical.io:80/rest/text/keywords?retina_name=en_associative
// http://api.cortical.io/Text.htm#!/text/getClusterRepresentationsForBulkText_post_5
import { CORTICO_API_KEY } from '../config/Constants'
var request = require('request');

export const getKeywords = (url) => {
    return new Promise((resolve, rej) => {
        getHtmlfromUrl(url)
            .then((html) => {
                const headers = {
                    'api-key': CORTICO_API_KEY
                }
                const options = {
                    url: `http://api.cortical.io:80/rest/text/keywords?retina_name=en_associative`,
                    method: 'POST',
                    headers: headers,
                    body: html
                }
                request(options, (err, res, body) => {
                    if (err) rej(err)
                    resolve(JSON.parse(body))
                })
            })
            .catch((e)=>{
                rej(e)
            })
    })
}

// Instead of doing a request here, force a curl and pass html. Have to call our api?

export const getHtmlfromUrl = (url) => {
    const options = {
        url: 'http://localhost:5000/api/curlPage',
        method: 'POST',
        form:{url}
    }
    return new Promise((resolve,rej)=>{
        request(options,(err,res,body)=>{
            if (err) rej(err)
            resolve(res.body)
        })
    })
}