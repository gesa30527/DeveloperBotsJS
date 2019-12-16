const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    let embed1 = new Discord.RichEmbed()
    .setColor("BLUE")
    .setTitle('All Commands:')
    .addField('**__Commands Free:__**',`
    **,Help**
    **,Ticket**
    **,App**
    **,Appeal**
    **,Intern**
    **,Toggle**
    **,Togglelist**
    **,Post**
    **,Scam**
    `)
    .addField('**__Current Admins:__**',`
    **UltimateTxch**
    **HeresDan**
    **MickyDon**
    `)
    message.channel.send(embed1);
}
