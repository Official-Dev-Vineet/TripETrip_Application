import nodemailer from "nodemailer";
import { config } from "dotenv";
config();
// create transporter using nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
  logger: true,
});

const sendMailOption = (option) => {
  transporter.sendMail(option, (error, info) => {
    if (error) {
      throw error;
    }
    return {
      response: info.response,
      messageId: info.messageId,
      previewUrl: nodemailer.getTestMessageUrl(info),
      messageId: info.messageId,
      status: "sent",
    };
  });
};
// send mail using nodemailer
export const sendMail = async (to, subject, text) => {
  const mailOptions = {
    from: process.env.MAIL_USERNAME,
    to,
    subject,
    html: text,
  };
  return sendMailOption(mailOptions)
  // send mail using transporter
};
console.log(
  sendMail(
    "svinnykumar02@gmail.com",
    "Hello",
    "my file <b>google media file</b>"
  )
);
