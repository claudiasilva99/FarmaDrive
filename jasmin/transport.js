const fetch = require("node-fetch");

const server = require("../server");




module.exports = {
  gettransp: gettransp,
  gettransp1: gettransp1

  }
  


function gettransp(req, res){


const url = 'https://my.jasminsoftware.com/api/234036/234036-0001/salesCore/p';
fetch(url, {

  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Authorization' : 'Bearer  eyJhbGciOiJSUzI1NiIsImtpZCI6IkFEM0Q1RDJERjM4OTZBMDUwMzYwNzVDQkNFNDc0RDJBMjI4MUVCM0UiLCJ0eXAiOiJKV1QiLCJ4NXQiOiJyVDFkTGZPSmFnVURZSFhMemtkTktpS0I2ejQifQ.eyJuYmYiOjE1ODY0MzkzMzgsImV4cCI6MTU4NjQ1MzczOCwiaXNzIjoiaHR0cHM6Ly9pZGVudGl0eS5wcmltYXZlcmFic3MuY29tIiwiYXVkIjpbImh0dHBzOi8vaWRlbnRpdHkucHJpbWF2ZXJhYnNzLmNvbS9yZXNvdXJjZXMiLCJqYXNtaW4iXSwiY2xpZW50X2lkIjoiSVNJUFJPSkVUTyIsInNjb3BlIjpbImFwcGxpY2F0aW9uIl19.qBP8oYipp9WIodTWTBGbR648i9QEgA5XinbYbsazsWOXhGY4ahcjXLXFz6ACUjK99oAkpWbKcjyq61Fxn8l0fq9Il1w06fatszZuNmeuAOAihgUiFCWs3bNPUXieL4v_D1_QoYyTULrz0ao3Jl7pExj_mvnqxeNpvzN2U7HJEEW7OBvEvobhu_nCGfFTR0Oyl9BGPQSN1yeygZoYoT7gUNJc1zf8zWk1lvrhJqPxQaIO_cfQyX9a2yRvb9LWPSkls6uGp43ngR8kg0VjNdnVz2CGm493Yoe_2tInxiuxloJBA2-4xGBCKfBlrG5QXNnRGm7BTQ2TlBPgupcFsu_cZw'
  },


})
.then(response => response.json())
.then(data => {

    console.log(data)
    res.send(data);
})
.catch(error => console.error(error))

};

function gettransp1(req, res){
  
  token5 = req.body.token;

  var myArray = [
    "TRANSPORTE1",
    "TRANSPORT2",
    "TRANSPORT3",
    "TRANSPORT4",
    "TRANSPORT5",
    "TRANSPORT6"
  ];
  
  var randomItem = myArray[Math.floor(Math.random()*myArray.length)];


  const url = 'https://my.jasminsoftware.com/api/235594/235594-0001/salesCore/salesItems/' + randomItem;
  fetch(url, {
  
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization' : 'Bearer ' + token5
    },
  
  
  })
  .then(response => response.json())
  .then(data => {
  
      console.log(data)

      var obj = {
        Nome_serie : data.itemKey,
        Nome_Transporte : data.description,
        Descricao : data.complementaryDescription
      }


      res.send(obj);
  })
  .catch(error => console.error(error))
  
  };
  
