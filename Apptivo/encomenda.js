const fetch = require("node-fetch");

const server = require("../server");




module.exports = {
    getteste: getteste,

  }
  


function getteste(req, res){


const url = 'https://api.apptivo.com/app/dao/v6/cases?a=getConfigData&apiKey=hpYPZSzIxAWS-mRTHPNZBxBNUJQVE-761bb13c-5660-4de1-ba9f-c4c4db767c13&accessKey=m312pi52BKb2s75t';
fetch(url, {

  method: 'GET',

})
.then(response => response.json())
.then(data => {

    console.log(data)
    res.send(data);
})
.catch(error => console.error(error))

};




