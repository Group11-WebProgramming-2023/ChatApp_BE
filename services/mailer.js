var nodemailer = require("nodemailer"); // khai báo sử dụng module nodemailer

exports.sendEmail = async ({ to, sender, subject, html, text }) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "kv242821@gmail.com",
      pass: "haoqelczejlzpdkm",
    },
  });
  var mailOptions = {
    from: "Chat Application",
    to: to,
    subject: subject,
    text: text,
    html: html,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
