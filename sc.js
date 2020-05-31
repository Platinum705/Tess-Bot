const Discord = require("discord.js")
const client = new Discord.Client()

client.on('message', message => {
 if(message.content.startsWith("spam")) {
  setInterval(() => {
   message.channel.send("spam")
 }, 500)
}
  setInterval(() => {
  message.channel.send("spam2")
}, 500)
 setInterval(() => {
  message.channel.send("spam3")
}
}) 

client.login(process.env.TOKEN)
