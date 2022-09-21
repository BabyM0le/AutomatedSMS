require('dotenv').config()

const accountSid = process.env.TwilioAccountSid
const authToken = process.env.TwilioAuthToken

const client = require('twilio')(accountSid, authToken)

function sendSMS(twilioNumber, outGoingNumber, body) {
    client.messages.create({
        to: outGoingNumber,
        from: twilioNumber,
        body: body,
    }).then(message => console.log(message.sid))
}


sendSMS('+17179877657', '+447466818068', 'TextBody')