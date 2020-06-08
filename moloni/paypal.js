var paypal = require('paypal-rest-sdk');

paypal.configure({
    'mode': 'sandbox', //sandbox or live
    'client_id': 'AWdnij_5aFFP3ufZ54jTpQKE3O5tuYyq-3WyrkuFPG5s23s64M6FKuZU-DRQZfFubxtwU5eTCHefJw4O',
    'client_secret': 'EE8PUFbItE4HQ1bl2oeqTCPNAUZe0MnUmQqZn5HDczXGgZDUhIA0DcmYN8R2wlAY_T9-MCOrTmbMNQ1u'
  });

  module.exports ={

      pay:pay,
      pay1:pay1,
      pay2:pay2

  }

  function pay(req, res){

    var total = req.body.total;
    var create_payment_json = {

        "intent": "sale",
        "payer": {
            "payment_method": "paypal"
        },
        "redirect_urls": {
            "return_url": "https://claudiasilva.outsystemscloud.com/APIfarma/Sucesso?total=" + total,
            "cancel_url": "http://localhost:8081/error"
        },
        "transactions": [{
            "item_list": {
                "items": req.body.items,/*[{
                    "name": "item",
                    "sku": "item",
                    "price": total,
                    "currency": "EUR",
                    "quantity": 1
                }]*/
            },
            "amount": {
                "currency": "EUR",
                "total": total,
            },
            "description": "This is the payment description."
        }]
    };
    
    
    paypal.payment.create(create_payment_json, function (error, payment) {
        if (error) {
            throw error;
        } else {

            for(let i = 0; i < payment.links.length; i++){
                if(payment.links[i].rel == 'approval_url'){
                    res.send(payment.links[i].href);
                }
            }

        }
    });

  }

function pay1(req, res){

    const payerId = req.query.PayerID;
    const paymentId = req.query.paymentId;

    const execute_payment_json = {

        "payer_id": payerId,
        "transactions": [{
            "amount": {
                "currency": "EUR",
                "total": "10.00"
            }
        }]
    };

        paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
            if (error) {
                console.log(error.response);
                throw error;
            } else {

                console.log(JSON.stringify(payment));

                res.send('Success');
            }
        });
        
    
  };


 function pay2(req, res){
        res.send("Pagamento Cancelado")

 }