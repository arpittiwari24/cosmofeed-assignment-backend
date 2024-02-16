import nodemailer from "nodemailer"

export default async function sendEmail(req, res) {

    let email, subject, text;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    })
    
    const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: subject,
        text: text
    }
    
    transporter.sendMail(mailOptions, (err, info) => {
        if(err){
            console.log(err);
        } else {
            res.status(200).json(info)
        }
    })
}
