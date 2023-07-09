const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SG_KEY);

const sendSGMail = async ({ to, sender, subject, html, attachments, text }) => {
  try {
    const from = "kv242821@gmail.com";

    const msg = {
      from: from, // Change to your verified sender
      to: to, // Change to your recipient
      subject: subject,
      html: html,
      // text: text,
      attachments,
    };

    return sgMail.send(msg);
  } catch (error) {
    console.log(error);
  }
};

exports.sendEmail = async (args) => {
  if (!process.env.NODE_ENV === "development") {
    return Promise.resolve();
  } else {
    return sendSGMail(args);
  }
};
