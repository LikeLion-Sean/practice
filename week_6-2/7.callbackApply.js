const request = require('request');

// 함수가 있는데 그안에 함수가 또 있네 -> 콜백1
// 어떤 이벤트를 발생을 시킬 때 미리 예약해둔 함수 -> 콜백2

const geocode = (address, callback) => {
    const mapUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1Ijoic2VhbmtpbTg0IiwiYSI6ImNrcm44azgzZzMzbjkycG00czlxZmJhZ3MifQ.reziBY35KPcDmuy4m4iMGA&limit=1`;
    request({url: mapUrl, json: true}, (error, response) => { // 콜백함수
        callback(undefined, {
            latitude: response.body.features[0].center[1],
            longitude: response.body.features[0].center[0],
            location: response.body.features[0].place_name
        })
        
    })
}

// const geocode = function(address, callback) {
//     기능
//     기능 
//     기능
// }

geocode(encodeURI('Hanoi'), (error,data) => { // address, callback
    console.log('Data', data)
})
