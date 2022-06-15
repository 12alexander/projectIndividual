"use strict";
const nodemailer = require("nodemailer");
const sgMail = require("@sendgrid/mail");
async function sendEmail(data) {
  console.log(data);
  sgMail.setApiKey(
    "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"
  );

  const msg = {
    to: data.user,
    from: "alexandermarquezlamadrid@gmail.com",
    subject: "Reserva Mostacho",
    template_id: "d-92c9b87a509445868aab06c2502ed2b3",
    dynamic_template_data: {
      fecha: data.day,
      user: data.user,
      hour: data.time,
      artist: data.artist,
      service: data.service,
      price: `S/. ${data.price}`,
    },
  };

  try {
    await sgMail.send(msg);
    console.log("correo enviado exitosamente");
  } catch (err) {
    console.log(err);
  }
}

async function main() {
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "alex18escorpio@gmail.com", // generated ethereal user
      pass: "wbtrvckeozvmenek", // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "alexandermarquezlamadrid@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

module.exports = {
  sendEmail,
};
