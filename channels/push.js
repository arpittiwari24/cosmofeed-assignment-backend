import PushNotifications from "node-pushnotifications";
// import webpush from "web-push"

const publicVapidKey = process.env.PUBLIC_KEY
const privateVapidKey = process.env.PRIVATE_KEY

export default async function sendPush(Message) {
    
    const settings = {
         web: {
      vapidDetails: {
        subject: "mailto: abcd@gmail.com", // mailto:EMAIL_ID
        publicKey: publicVapidKey,
        privateKey: privateVapidKey,
      },
      gcmAPIKey: "gcmkey",
      TTL: 2419200,
      contentEncoding: "aes128gcm",
      headers: {},
    },
    isAlwaysUseFCM: false,
    }

    const push = new PushNotifications(settings)

    const payload = {title: "Notification for Testing"}

    push.send(Message,payload, (err,response) => {
        if(err){
            console.log(err);
        } else {
            console.log(response);
        }
    })    
}

