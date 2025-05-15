import nodemailer from 'nodemailer';
import { SMTP_HOST } from "astro:env/server";
import { SMTP_PORT } from "astro:env/server";
import { SMTP_USERNAME } from "astro:env/server";
import { SMTP_PASSWORD } from "astro:env/server";
import { SMTP_SECURE } from "astro:env/server";
import { SMTP_DESTINATION } from "astro:env/server";

export async function sendEmail(
    name: any,
    userEmail: any,
    text: any,
) {
    const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: SMTP_PORT,
        secure: SMTP_SECURE,
        auth: {
            user: SMTP_USERNAME,
            pass: SMTP_PASSWORD,
        },
        tls: { rejectUnauthorized: false }
    });

    // Configure the mailoptions object
    const mailOptions = {
        from: name + ' <' + SMTP_USERNAME + '>',
        sender: userEmail,
        replyTo: userEmail,
        to: SMTP_DESTINATION,
        subject: 'Contacto dende a web',
        text: text
    };

    const data = await transporter.sendMail(mailOptions);

    if (data.accepted) {
        return true;
    }

    console.log(data);
    return false;
}

