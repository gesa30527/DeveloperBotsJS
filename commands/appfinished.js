const Discord = require("discord.js")
module.exports.run = async (bot, message, args) => {
    if(!message.guild) return;
    const embed = new Discord.RichEmbed()
    .setDescription(`**App Finished**

    If you have not recieved your role from the application you submitted, please dm an application reader.
    ***Requested by ${message.author}***
    `)
    .setColor("BLUE")
    message.channel.send(embed)
}