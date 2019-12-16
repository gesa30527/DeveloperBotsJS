const Discord = require("discord.js");
const { getMember, formatDate } = require("../functions.js");

module.exports.run = async (bot, message, args) => {
    if(!message.guild) return;
    if(!message.member.roles.find(r => r.name === "Modernator" || r.name === "Owner" || r.name === "Administrator" || r.name === "Trial Modernator")) return message.reply('You dont have permission to use this command!');
    let target = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let reason = args.slice(1).join(' ');
    let logs = message.guild.channels.find(ch => ch.name === "logs");
    if (!target) return message.reply('You need to specify a member!');
    if (!reason) return message.reply('You need to specify a reason!');
    if (!logs) return message.reply(`Cloudn't find channel ``logs```);
    let embedLog = new Discord.RichEmbed()
        .setColor('BLUE')
        .setThumbnail(target.user.avatarURL)
        .setTitle("[Warned] " + target.user.username)
        .addField('Member:', target)
        .addField('Member ID:', target.user.id)
        .addField('Date:', formatDate(message.createdAt))
        .addField('Reason:', reason)
        .addField('Warned by:', message.author)
    let embedDM = new Discord.RichEmbed()
        .setColor('BLUE')
        .setThumbnail(target.user.avatarURL)
        .setTitle("Warning Information")
        .addField('Date:', formatDate(message.createdAt))
        .addField('Reason:', reason)
        .addField('Warned by:', message.author)
        message.channel.send(`${target} has been warned!`);
    logs.send(embedLog);
    target.send(embedDM);
};