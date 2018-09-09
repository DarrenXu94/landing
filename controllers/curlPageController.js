const curl = new (require( 'curl-request' ))();

function doTheCurl(url){
    return new Promise((res,rej)=>{
        curl
        .get(url)
        .then(({statusCode, body, headers}) => {
            res(body)
        })
        .catch((e) => {
            rej(e)
        });
    })
   
}

function curlUrl(urlObj){
    if (!('url' in urlObj)) return 
    return new Promise((res,rej)=>{
        doTheCurl(urlObj.url)
        .then((body)=>{
            res(body)
        })
        .catch((e)=>{
            rej(e)
        })
    })
   
}

module.exports = curlUrl