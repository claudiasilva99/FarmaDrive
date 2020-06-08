var unirest = require("unirest");
var server = require("../server");

module.exports = {

    getTempo01: getTempo01,
    getTempo02: getTempo02,
    tempo: tempo
}


function getTempo02(req, res) {

    var long = req.body.long;
    var lat = req.body.lat;

    console.log(long, lat);

    var reqs = unirest("GET", "https://trueway-directions2.p.rapidapi.com/FindDrivingRoute");


    reqs.headers({
        "x-rapidapi-host": "trueway-directions2.p.rapidapi.com",
        "x-rapidapi-key": "f0a6558ccemsh2b26c2d14b097e5p185d9ejsnd33bb4affe20"
    });


    reqs.query({
        "stops": "38.567640%2C-9.038862%3B" + lat + "%2C" + long
    })




    reqs.end(function (resp) {

        if (resp.error) throw new Error(res.error);

        var tempo = {
            Distancia: resp.body.route.distance,
            Tempo: resp.body.route.duration

        }
        console.log(tempo);
        res.send(tempo);

    })
};








function getTempo01(req, res) {



    console.log(req.body.codigo_postal);



    var reqs = unirest("GET", "https://community-zippopotamus.p.rapidapi.com/pt/" + req.body.codigo_postal);

    reqs.headers({
        "x-rapidapi-host": "community-zippopotamus.p.rapidapi.com",
        "x-rapidapi-key": "f0a6558ccemsh2b26c2d14b097e5p185d9ejsnd33bb4affe20"
    });

    var teste;
    reqs.end(function (resp) {
        if (resp.error) throw new Error(res.error);


        var cord = {
            long: resp.body.places[0].longitude,
            lat: resp.body.places[0].latitude

        }

        res.send(cord);
    });



};

function tempo(req, res){
    var long = req.body.long;
    var lat = req.body.lat;

    var request = require('request');
    
    request({
    
      method: 'POST',
      url: 'https://api.openrouteservice.org/v2/matrix/driving-car',
      body: '{"locations":[[-8.3667,41.55],[' + long +',' + lat + ']]}',
      headers: {
        'Accept': 'application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8',
        'Authorization': '5b3ce3597851110001cf6248707a55eca1144abf99fe7bfdef85f2e9',
        'Content-Type': 'application/json'
      }}, function (error, response, body) {
      console.log('Status:', response.statusCode);
      console.log('Headers:', JSON.stringify(response.headers));
        var obj = JSON.parse(response.body);
    
        console.log(obj.durations[0][1]);
    
        var objS = {
          Tempo : obj.durations[0][1]
        }
    
      res.send(objS)
    
    
    })
    };
    