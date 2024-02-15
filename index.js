import express  from "express";
import fast2sms from "fast-two-sms"
const app = express()

async function send  (){
  var options = {authorization : api_key , message : 'Ram Ram !!' ,  numbers : ['9315165820','9899128212']} 
console.log(await fast2sms.sendMessage(options))
}
send()
app.listen(15000,() => {
  console.log("Server running on port 15000");
})
