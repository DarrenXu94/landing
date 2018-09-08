var request = require('request');

export const getChromeHistory = () => {
    const options = {
        url: 'http://localhost:5000/api/chromeHistory',
        method: 'GET'
    }
    return new Promise((resolve,rej)=>{
        request(options,(err,res,body)=>{
            if (err) rej(err)
            try {
                resolve(JSON.parse(body))

            } catch(e){
                console.log(e)
                rej(e)
            }
        })
    })
}