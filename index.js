import express  from "express";
import emailRouter from "./routes/sendEmail.js";
import { config } from "dotenv";
// import fast2sms from "fast-two-sms"
const app = express()

config({
  path: "./.env"
})
app.use(express.json())
app.use("/",emailRouter)

app.listen(15000,() => {
  console.log("Server running on port 15000");
})
