const Discord = require("discord.js")
module.exports.run = async (bot, message, args) => {
    if(!message.guild) return;
    const embed = new Discord.RichEmbed()
    .setDescription(`**Rules**

    Here is the link to our community's rules [Click Here](https://docs.google.com/document/d/181Lx3suLybDVyJsOy6lSKAi-SCKEzN4oqqFsxk-CEFw/edit?usp=sharing).
    ***Requested by ${message.author}***
    `)
    .setColor("BLUE")
    message.channel.send(embed)
}