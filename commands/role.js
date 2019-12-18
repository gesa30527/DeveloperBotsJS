const Discord = require("discord.js")
module.exports.run = async (bot, message, args) => {
    if(!message.guild) return;
    const embed = new Discord.RichEmbed()
    .setDescription(`**Roles**

    **[:star:] Featured Creations**
    **Game Producer**
    **DevForum Full Member**
    **DevForum New Member**
    **YouTube (1k+)**
    **Builder**
    **3D Modeler**
    **Programmer**
    **User Interface**
    **GFX Artist**
    **Animator**
    **Sound Effects**
    **Musical Composer**
    **Vioce Actor**
    **Photographer**
    **Clothing Designer**
    **Texture Artist**
    **Member**
    `)
    .setColor("BLUE")
    message.channel.send(embed)
}