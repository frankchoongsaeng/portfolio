import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

interface ReqBody {
  fullname: string;
  email: string;
  message: string;
  subject: string;
}

// create a nodemailer transporter
let transporter = nodemailer.createTransport({
  host: "mail.privateemail.com",
  port: 465,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { fullname, email, message, subject }: ReqBody = req.body || {};

  if (!fullname || !email || !message || !subject) {
    return res
      .status(400)
      .json({ error: true, message: "missing or invalid parameters" });
  }

  console.log(process.env.EMAIL, process.env.EMAIL_PASSWORD);

  try {
    // send the mail
    await transporter.sendMail({
      from: "site@frankchoongsaeng.com",
      to: process.env.EMAIL,
      replyTo: email,
      subject,
      text: message,
      date: new Date().toUTCString(),
    });
    console.log("done");
    res.status(200).json({ error: false, message: "sent" });
  } catch (error) {
    // log the error if any
    console.log(error);
    res.status(450).json({
      error: true,
      message:
        "Requested mail action not taken: mailbox unavailable (e.g., mailbox busy or temporarily blocked for policy reasons)",
    });
  }
};
