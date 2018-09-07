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
    })
}

export const getHtmlfromUrl = (url) => {
    return new Promise((res, rej) => {
        request(url, (err, result, body) => {
            if (err) rej(err)
            res(body)
        })
    })
}