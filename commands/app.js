const Discord = require("discord.js")
module.exports.run = async (bot, message, args) => {
    if(!message.guild) return;
    const embed = new Discord.RichEmbed()
    .setDescription(`**Apps Tag**

    If you would like to apply for a role within our community, applications can be found in #applications.
    ***Requested by ${message.author}***
    `)
    .setColor("BLUE")
    message.channel.send(embed)
}