import express from "express"
import nodemailer from "nodemailer"
const emailRouter = express.Router()

emailRouter.post("/", async (req,res) => {

    const {email,subject,content} = req.body
    const transport =  nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "atofficial2410@gmail.com",
            pass: process.env.PASSWORD
        }
    })

    const mailOptions = {
        from: "atofficial2410@gmail.com",
        to: email,
        subject: subject,
        text: content
    }

    transport.sendMail(mailOptions, (err,info) => {
        if(err) {
            console.log(err);
        } else {
            res.status(200).json(info.accepted)
        }
    })
})

export default emailRouter