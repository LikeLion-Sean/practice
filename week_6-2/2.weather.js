const request = require('request');

const weatherUrl = "http://api.weatherstack.com/current?access_key=57af866a3b550033001e0ccd6826923d&query=10.8231,106.6297&units=f"
// const Jong = "http://api.weatherstack.com/current?access_key=b32fbe77b7478d1087d1da4251388772"

request( {url: weatherUrl}, (error,response) => { // parameter
    //console.log(response.body) 
    const data = JSON.parse(response.body); // JSON 파일이기 때문에 파일 포맷 변경
    console.log(data.location.name);
}); // http

