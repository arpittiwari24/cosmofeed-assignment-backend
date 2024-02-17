import nodemailer from "nodemailer"

export default async function sendEmail(text, subject, resipient) {

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    })
    
    const mailOptions = {
        from: process.env.EMAIL,
        to: resipient,
        subject: subject,
        text: text
    }
    
 await transporter.sendMail(mailOptions, (err, info) => {
        if(err){
            console.log(err);
        } else {
            log.info("Email sent: " + info.response);
        }
    })
}
