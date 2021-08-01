const request = require('request');

const mapUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2VhbmtpbTg0IiwiYSI6ImNrcm44azgzZzMzbjkycG00czlxZmJhZ3MifQ.reziBY35KPcDmuy4m4iMGA&limit=1"

request({url: mapUrl, json: true}, (error, response) => {
    const latitude = response.body.features[0].center[1]// 위도
    const longitude = response.body.features[0].center[0]// 경도

    console.log(latitude, longitude);
});
