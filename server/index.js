require('dotenv/config');
const express = require('express');
const nodemailer = require('nodemailer');

const db = require('./database');
const staticMiddleware = require('./static-middleware');
const sessionMiddleware = require('./session-middleware');

const app = express();

app.use(staticMiddleware);
app.use(sessionMiddleware);
app.use(express.json());

async function main(guestInfo) {
  const transport = nodemailer.createTransport({
    host: 'reitanfamily.com',
    port: 465,
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASS
    },
    secure: true
  });

  const info = await transport.sendMail({
    from: '"Wedding RSVP" <nathan@reitanfamily.com>',
    to: 'weddingreitan@gmail.com',
    subject: 'Wedding RSVP from: ' + guestInfo.guest1Name,
    text: `
      Attending?: ${guestInfo.attending},
      Guest 1: ${guestInfo.guest1Name},
      Guest 1 Meal: ${guestInfo.guest1Meal},
      Guest 1 Allergies: ${guestInfo.guest1Allergies},
      Guest 2: ${guestInfo.guest2Name},
      Guest 2 Meal: ${guestInfo.guest2Meal},
      Guest 2 Allergies: ${guestInfo.guest2Allergies}
    `,
    html: `<ol>
            <li>Attending?: <strong>${guestInfo.attending}</strong>,</li>
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

app.get('/api/health-check', (req, res, next) => {
  db.query('select \'successfully connected\' as "message"')
    .then(result => res.json(result.rows[0]))
    .catch(err => next(err));
});

app.post('/api/rsvp', (req, res) => {
  const guest1Name = req.body.firstName1 + ' ' + req.body.lastName1;
  const guest1Meal = req.body.meal1;
  const guest1Allergies = req.body.allergies1;
  const guest2Name = req.body.firstName2 + ' ' + req.body.lastName2;
  const guest2Meal = req.body.meal2;
  const guest2Allergies = req.body.allergies2;
  const attending = req.body.attending;
  const guestInfo = { guest1Name, guest1Meal, guest1Allergies, guest2Name, guest2Meal, guest2Allergies, attending };
  if (attending === 'false') {
    return main(guestInfo).catch(console.error);
  } else {
    main(guestInfo).catch(console.error);

    const params = [guest1Name, guest1Meal, guest1Allergies, guest2Name, guest2Meal, guest2Allergies];
    const sql = `insert into "rsvp"("rsvpId", "guest1Name", "guest1Meal", "guest1Allergies", "guest2Name", "guest2Meal", "guest2Allergies")
                  values (default, $1, $2, $3, $4, $5, $6)
                  returning *
                  `;

    db.query(sql, params)
      .then(response => response.rows[0])
      .then(data => res.status(201).send(data))
      .catch(err => {
        console.error(err);
        return res.status(500).send('An unexpected error has occurred');
      });
  }
});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', process.env.PORT);
});
