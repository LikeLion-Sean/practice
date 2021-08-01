const request = require('request'); // 모듈을 불러올때 사용하는 함수

const weatherUrl = "http://api.weatherstack.com/current?access_key=57af866a3b550033001e0ccd6826923d&query=37.3827,127.1189"

request({url: weatherUrl} , (error, response) => {
    const data = JSON.parse(response.body) // 포맷을 javascript 가 읽을 수 있도록 변환시켜주는 것
    console.log(data.request)
})

// 객체
// 배열

// ppt 열고 싶어요. -> pdf 프로그램 -> ppt?

