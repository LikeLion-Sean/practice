const request = require('request'); // 모듈을 불러올때 사용하는 함수

const weatherUrl = "http://api.weatherstack.com/current?access_key=57af866a3b550033001e0ccd6826923d&query=37.3827,127.1189"

request({url: weatherUrl, json: true},(error,response) => {
    response.body
    
    // console.log(cur.temperature);
    // console.log(cur.weather_descriptions[0]);
    // console.log(`현재 온도는 ${cur.temperature} 현재 날씨 설명입니다 ${cur.weather_descriptions[0]}`);
});