require('dotenv/config');
const express = require('express');
const nodemailer = require('nodemailer');

// const db = require('./database');
const staticMiddleware = require('./static-middleware');
const sessionMiddleware = require('./session-middleware');

const app = express();

app.use(staticMiddleware);
app.use(sessionMiddleware);
app.use(express.json());

async function main(guestInfo) {
  const transport = nodemailer.createTransport({
    host: 'reitanfamily.com',
    port: 587,
    secure: true,
    auth: {
      user: 'nathan@reitanfamily.com',
      pass: '!02MeSiTa'
    }
  });

  const info = await transport.sendMail({
    from: '"Wedding RSVP" <nathan@reitanfamily.com>',
    to: 'nathanreitan@gmail.com',
    subject: 'Wedding RSVP from: ' + guestInfo.guest1Name,
    text: `
      Guest 1: ${guestInfo.guest1Name},
      Guest 1 Meal: ${guestInfo.guest1Meal},
      Guest 1 Allergies: ${guestInfo.guest1Allergies},
      Guest 2: ${guestInfo.guest2Name},
      Guest 2 Meal: ${guestInfo.guest2Meal},
      Guest 2 Allergies: ${guestInfo.guest2Allergies}
    `,
    html: `<ol>
            <li>Guest 1: ${guestInfo.guest1Name},</li>
            <li>Guest 1 Meal: ${guestInfo.guest1Meal},</li>
            <li>Guest 1 Allergies: ${guestInfo.guest1Allergies},</li>
            <li>Guest 2: ${guestInfo.guest2Name},</li>
            <li>Guest 2 Meal: ${guestInfo.guest2Meal},</li>
            <li>Guest 2 Allergies: ${guestInfo.guest2Allergies}</li>
          </ol>`
  });
  // eslint-disable-next-line no-console
  console.log('Message send" %s', info.messageId);
  // eslint-disable-next-line no-console
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
}

app.post('/api/rsvp', (req, res) => {
  const guest1Name = req.body.name1;
  const guest1Meal = req.body.meal1;
  const guest1Allergies = req.body.allergies1;
  const guest2Name = req.body.name2;
  const guest2Meal = req.body.meal2;
  const guest2Allergies = req.body.allergies2;
  const guestInfo = { guest1Name, guest1Meal, guest1Allergies, guest2Name, guest2Meal, guest2Allergies };

  main(guestInfo).catch(console.error);

});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', process.env.PORT);
});
