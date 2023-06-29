import nodemailer from 'nodemailer';

export default (req, res) => {
    const { fullname, email, message, subject } = req.body || {};

    if (!fullname || !email || !message || !subject) {
        return res.status(400).json({ error: true, message: 'missing or invalid parameters' });
    }

    // create a nodemailer transporter
    let transporter = nodemailer.createTransport({
        port: 465,
        host: 'smtp.gmail.com',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
        },
        secure: true,
    });

    console.log(process.env.EMAIL, process.env.PASSWORD);

    transporter.sendMail(
        {
            from: 'franchoongsaeng@gmail.com',
            to: process.env.EMAIL,
            replyTo: email,
            subject,
            text: message,
            date: new Date().toUTCString(),
            headers: {
                priority: 'high',
            },
        },
        err => {
            if (err) {
                console.log(err);
                return res.status(450).json({
                    error: true,
                    message:
                        'Requested mail action not taken: mailbox unavailable (e.g., mailbox busy or temporarily blocked for policy reasons)',
                });
            }
            res.status(200).json({ error: false, message: 'sent' });
        }
    );
};
