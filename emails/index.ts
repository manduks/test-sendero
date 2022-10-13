import { buildSendMail } from 'mailing-core';
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: 'smtp.sendgrid.net',
  port: 587,
  auth: {
    user: 'apikey',
    pass: process.env.SEND_GRID_KEY,
  },
});

const sendMail = buildSendMail({
  transport,
  defaultFrom: 'yovany.lg@gmail.com',
  configPath: './mailing.config.json',
});

export default sendMail;
