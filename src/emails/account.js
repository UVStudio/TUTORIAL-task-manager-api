const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'uvstudio2199@gmail.com',
    subject: 'Thank you for joining',
    text: `Welcome to the app ${name}. Let me know how we can help.`
  })
}

const sendCancelEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'uvstudio2199@gmail.com',
    subject: `Sorry to see you go.`,
    text: `Is there anything I can do for you ${name}.`
  })
}

module.exports = {
  sendWelcomeEmail,
  sendCancelEmail
}