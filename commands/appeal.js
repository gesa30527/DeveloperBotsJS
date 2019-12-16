const Discord = require("discord.js")
module.exports.run = async (bot, message, args) => {
    if(!message.guild) return;
    const embed = new Discord.RichEmbed()
    .setDescription(`**Appeal**
    
    If you would like to appeal a ban please make a ticket or direct message a Moderator about it.
    ***Requested by ${message.author}***
    `)
    .setColor("BLUE")
    message.channel.send(embed)
}