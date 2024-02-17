import { config } from "dotenv";
import sendEmail from "./channels/sendEmail.js";
import sendPush from "./channels/push.js";

config({
  path: "./.env"
})

function sendNotification(notification) {
  const {message, recipient, messageType, channelType} = notification;

  const channelArray = []

  if (messageType === "urgent") {
    channelArray.push("email")
  } else if (messageType === "normal"){
    channelType.forEach((channel) => {
      if (channel === 'push') channelArray.push('push');
      else if (channel === 'email') channelArray.push('email');
    })
  }

  channelArray.forEach((channel) => {
    if (channel === "email") {
      sendEmail(message, "Notification from App", recipient)
    } else if (channel === "push") {
      sendPush(message)
    }
  })
}

const object = {
  message: "Hello",
  recipient: "arrpit0@gmail.com",
  messageType: "normal",
  channelType: ["email"]
}

sendNotification(object)
