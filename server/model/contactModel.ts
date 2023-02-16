import * as dotenv from "dotenv";
import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import { ParsedQs } from "qs";

dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  },
  port: 465,
  host: 'smtp.gmail.com'
});

const sendContact = async (
  req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
  res: Response<any, Record<string, any>>
) => {
  const { name, email, message } = req.body;
  const mailOptions = {
    from: email,
    to: process.env.EMAIL,
    subject: `Message from portfolio site`,
    text: message +  '\n\n SENT FROM: ' + email
  };
  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      res.json({
        status: 'Failed',
        error: err
      });
    } else {
      res.json({
        status: 'Email Sent'
      });
    }
  });
};

export default sendContact;
