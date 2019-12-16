const Discord = require("discord.js")
module.exports.run = async (bot, message, args) => {
    if(!message.guild) return;
    const embed = new Discord.RichEmbed()
    .setDescription(`🕵️ **What do I do if I have been scammed?**

    ✅ Create a ticket relating to the scam by saying ",ticket" in #cmds 

    ✅ When you create that ticket staff will be with you shortly to assist you with the Scam.

    ✅ When a staff member responds to the ticket they will proceed in their scam investigation. Please comply will the staff member, remember they are there to help you.
    
    ✅ If they believe a scam was committed they will take Administrative actions against the scammer in the discord server.
    ***Requested by ${message.author}***
    `)
    .setColor("BLUE")
    message.channel.send(embed)
}