const nodemailer = require('nodemailer');
const { user, pass } = require('./vault');
const { venues } = require('./venues');
const { generateEmailHTML } = require('./emailHTML');

console.log('starting gig-getter\n\n');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user,
    pass,
  },
});

const mailOptions = {
  from: '', // sender address
  to: '', // list of receivers
  // ['']
  subject: 'Test',
  html: generateEmailHTML({ name: 'Lucky Venue' }, ...['Venue1', 'Venue2', 'Venue3']),
};

const recipients = {
  emailSubmit: [],
  siteSubmit: [],
};

transporter.sendMail(mailOptions, function(err, info) {
  if (err) { console.log('ERROR:\n\n', err); } 
  else { console.log('mail sent:\n\n', info); }
});
