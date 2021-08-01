const request = require('request');

const weatherUrl = "http://api.weatherstack.com/current?access_key=57af866a3b550033001e0ccd6826923d&query=10.8231,106.6297&units=f"

request( {url: weatherUrl, json: true}, (error,response) => { 
    // console.log(`It's currently ${response.body.current.temperature}`);
    console.log(response.body.current.pressure)
}); 

// pressure

