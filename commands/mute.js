const Discord = require("discord.js")
const ms = require('ms');
const { getMember, formatDate } = require("../functions.js");

module.exports.run = async (bot, message, args) => {
    if(!message.guild) return;
    if(!message.member.roles.find(r => r.name === "Moderators" || r.name === "Founder" || r.name === "Administrator" || r.name === "Trial Modernators"|| r.name === "Moderator Leader")) return message.reply('You dont have permission to use this command!');
    let person  = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
    let mainrole = message.guild.roles.find(role => role.name === "Member");
    let muterole = message.guild.roles.find(role => role.name === "Muted");
    let time = args[1];
    let reason = args.slice(2).join(' ');
    let logs = message.guild.channels.find(ch => ch.name === "logs");
    if(!person) return message.reply("You need to specify a member!");
    if(!time) return message.reply("You need to specify time!");
    if(!reason) return message.reply("You need to specify a reason!");
    if(!muterole) return message.reply("Cloudn't find role ``@Muted``");
    if(!mainrole) return message.reply("Cloudn't find role ``@Member``");
    if(!logs) return message.reply(`Cloudn't find channel ``logs```);
    const embeds = new Discord.RichEmbed()
        .setColor('BLUE')
        .setThumbnail(person.user.avatarURL)
        .setTitle("[Muted] " + person.user.username)
        .addField('Member:', person)
        .addField('MemberID:', person.user.id)
        .addField('Date:', formatDate(message.createdAt))
        .addField('Time:', ms(ms(time)))
        .addField('Reason:', reason)
        .addField('by:', message.author)
        person.removeRole(mainrole.id);
        person.addRole(muterole.id);
        logs.send(embeds)
        message.channel.send(`${person} has been muted for ${ms(ms(time))}!`);
        setTimeout(function(){
        person.addRole(mainrole.id);
        person.removeRole(muterole.id);
        message.channel.send(`${person} has been unmuted!`)
    }, ms(time));
}
