const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
if(!message.guild) return;
const embeds = new Discord.RichEmbed()
.setDescription(`:gear: **Role Toggle Info**
You can toggle the roles you would like to have or remove!

*Pings*
1) **,toggle eventsping (on/off)  (choose one)**
2) **,toggle partnerping (on/off)  (choose one)**
3) **,toggle newsping (on/off)  (choose one)**

Roles
1)  **,toggle hireable (on/off)  (choose one)**
2)  **,toggle nonhireable (on/off)  (choose one)**
3)  **,toggle qatester (on/off)  (choose one)**
4)  **,toggle investor (on/off)  (choose one)**
5)  **,toggle language translator (on/off)  (choose one)**

***Requested by ${message.author}***
`)
.setColor("BLUE")
message.channel.send(embeds)
}