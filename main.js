const accountSid = 't';
const authToken = 't';

const client = require('twilio')(accountSid, authToken);

client.messages
    .create({
        to: '+447466818068',
        from: '+17179877657',
        body: 'Test',
    })
    .then(message => console.log(message.sid));