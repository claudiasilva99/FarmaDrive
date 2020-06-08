const express = require('express');
const port = process.env.PORT || 8081;
const host = process.env.HOST || '127.0.0.1';
const bodyParser = require('body-parser');
var request = require('request');
const costumers = require("./moloni/costumers");
const transport = require("./jasmin/transport");
const fatura = require("./moloni/fatura");
const product = require("./moloni/product");
const fetch = require("node-fetch");
const paypal = require("./moloni/paypal");
const nav = require("./Nav/encomendanav");
const apptivo = require("./Apptivo/encomenda");
var ntlm = require('request-simple-ntlm');
const dist = require('./maps/distancia');
const expressSanitizer = require('express-sanitizer');
const cors = require('cors');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(expressSanitizer());
app.use(cors());
app.use(cors({
    exposedHeaders: ['Location'],
}));

module.exports.app = app;

//-----------------------teste------------------

app.post('/claudia', fatura.teste90)

//----------------Moloni-----------------------------


app.post('/moloni/fatura/insert', fatura.fatura);
app.post('/moloni/faturas/all', fatura.getallfaturas);

app.post('/moloni/costumers/one', costumers.getcostumerID);
app.post('/moloni/costumers/insert', costumers.insertCostumer);
app.post('/moloni/costumers/all', costumers.getallcostumers);

app.post('/moloni/sem/receita/all', product.getallproductsubcat);
app.post('/moloni/com/receita/all', product.getallproductsubcat);
app.post('/moloni/product/all', product.getallproducts);
app.post('/moloni/product/one', product.getproductID);

app.post('/moloni/fatura/pdf', fatura.pdf);


//-----------Jasmin----------------------------

app.get('/jasmin/transportes/all', transport.gettransp);
app.post('/jasmin/transporte', transport.gettransp1);
app.get('/refreshtoken', teste100);


//----------Paypal----------------------------------

app.post('/paypal/pay', paypal.pay);
app.get('/success', paypal.pay1);
app.get('/error', paypal.pay2);

//--------------------Nav-----------------------------------

app.post('/nav/encomenda/insert', nav.postencomenda);
app.post('/nav/encomenda', nav.ultima);
app.get('/nav', nav.getcompanyID);

//-------------------------APPTIVO-------------------------------------------------------------------

app.get('/apptivo/teste', apptivo.getteste);


//-------------------------------API DISTANCIA------------------------------------------


app.post('/longlat', dist.getTempo01);
//app.post('/tempo', dist.getTempo02);
app.post('/tempo', dist.tempo);

//-----------------------------------------------------------------------------------


app.listen(port, function (err) {
    if (!err) {
        console.log('Your app is listening on ' + host + ' and port ' + port);


    } else { console.log(err); }
});



const option = {

    url: 'https://identity.primaverabss.com/core/connect/token',
    //method: 'POST',
    auth: {
        user: 'FARMADRIVE', 
        pass: '568f612d-19ff-4acd-9def-3c483c4228a6' 
    },
    form: {
        'grant_type': 'client_credentials',
        'scope': 'application',
    }
}

function teste100(req, res) {

    var teste;
    request.post(option, function token(err, resp) {


        if (!err) {

            var json = JSON.parse(resp.body);



            console.log("Access Token:", json.access_token);
            res.send(json.access_token);



        } else {
            console.log("Could not obtain acess token.");
        }
    });

    console.log(teste);

}



var jsonStr = '{"andre":[], "tt" : []}';

var obj = JSON.parse(jsonStr);
obj['tt'].push({ "teamId": "4", "status": "pending" });
jsonStr = JSON.stringify(obj);
console.log(jsonStr)

