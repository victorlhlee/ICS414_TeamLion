const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.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);
const msg = {
    to: 'test@example.com',
    from: 'test@example.com',
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
sgMail.send(msg);