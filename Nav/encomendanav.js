var httpntlm = require('httpntlm');
var Request = require('ntlm-webapi');
var WebApi = require('ntlm-webapi');

const ntlm = require('request-ntlm-promise');

const URL = 'http://94.60.180.74:8080'
const options = {
    username: 'ANDRÉ FREITAS',
    password: 'Qwerty@1995',
    workstation: 'LAPTOP-D17H1E17',
    domain: '',
    ntlm_domain: URL,
    url: `${URL}/DynamicsNAV110/api/beta/companies(cbc66cd3-c138-4bfb-81f8-c5142f303a15)/salesOrders`
};






function ultima(req, res){


    var json = {
    
        orderDate: "2019-01-24",
        customerNumber: "C00040",
        currencyCode: "EUR",
        paymentTermsId: "36b5d94a-290c-47ac-ae08-28bd4b3d0714",
        billingPostalAddress:  req.body /*{//alterar
              street: "153 Thomas Drive",
              city: "Coventry",
              state: "",
              countryLetterCode: "GB",
              postalCode: "CV6 1GY"
          }*/
          
      };


  ntlm.post(options, json).then(function(resultado){
      console.log(resultado)

        var teste = {
            Numero_encomenda : resultado.number,
            Endereço_Entrega : resultado.billingPostalAddress,
            Farmacia : resultado.customerName,

        }


      res.send(teste);


  })
};








var webapi = new WebApi({
    url: "http://94.60.180.74:8080/DynamicsNAV110/api/beta/companies(cbc66cd3-c138-4bfb-81f8-c5142f303a15)/salesOrders",
    username: 'ANDRÉ FREITAS',
    password: 'Qwerty@1995',
    workstation: 'LAPTOP-D17H1E17',
    domain: ''
    
});




var request = new Request({
    url: "http://94.60.180.74:8080/DynamicsNAV110/api/beta/companies(cbc66cd3-c138-4bfb-81f8-c5142f303a15)/",
    username: 'ANDRÉ FREITAS',
    password: 'Qwerty@1995',
    workstation: 'LAPTOP-D17H1E17',
    domain: ''
});






function getcompanyID(req,res){
request.get(function(err, result){

    if (err) console.log (err);

    console.log (result);
    res.send(result);
})};





function postencomenda(req, res) {



    var obj = {
    
        orderDate: "2019-01-24",
        customerNumber: "20000",
        currencyCode: "GBP",
        paymentTermsId: "d4a2efa0-5729-41f2-be19-2b049ba7c36f",
        billingPostalAddress: {
              street: "153 Thomas Drive",
              city: "Coventry",
              state: "",
              countryLetterCode: "GB",
              postalCode: "CV6 1GY"
          }
          
      }

    webapi.post(obj, function(err, result){
 
        if (err) console.log (err);
 
        console.log (JSON.stringify(result, undefined, '\t'));
        

            res.send("vv");
    })

} 

module.exports = {

   postencomenda : postencomenda,
   getcompanyID :getcompanyID,
   ultima : ultima

}

