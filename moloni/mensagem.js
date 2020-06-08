const TWILIO_ACOUNT_SID = 'ACe22018fbab891c1b27cf8566c48e9271';
const TWILIO_AUTH_TOKEN = '945e5f29f8c17883f69aa83004d83a9b';
const client = require('twilio')(TWILIO_ACOUNT_SID, TWILIO_AUTH_TOKEN);

function sendM(m, obj) {
client.messages.create({
    from: 'whatsapp:+14155238886',
    to:'whatsapp:+351' + m,
    body: 'Farma Drive dá-lhe as boas-vindas à nossa aplicação. O seu ID de Cliente é ' + obj + '.'
}).then(message => console.log(message.sid));
};



function sendF(m, obj) {
    client.messages.create({
        from: 'whatsapp:+14155238886',
        to:'whatsapp:+351' + m,
        body: 'Farma Drive dá-lhe as boas-vindas à nossa aplicação. O seu ID de Cliente é ' + obj + '.'
    }).then(message => console.log(message.sid));
    };


module.exports = {
    sendM : sendM
}



