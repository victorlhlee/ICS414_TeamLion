$(document).ready(function(){
    $("#yousure").click(function() {
        location.href = "sentToSupervisor.html";
        const Nexmo = require('nexmo')

        const nexmo = new Nexmo({
            apiKey: 'b91f33b9',
            apiSecret: 'VgUVHXmxQABCOn3o'
        });
        const from = 'ICS414'
        const to = 8083892724
        const text = '414 Test, A text message sent using the Nexmo SMS API'

        nexmo.message.sendSms(from, to, text, (error, response) => {
            if(error) {
                throw error;
            } else if(response.messages[0].status != '0') {
            console.error(response);
            throw 'Nexmo returned back a non-zero status';
        } else {
            console.log(response);
        }
    });
});
});