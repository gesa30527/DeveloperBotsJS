const Discord = require("discord.js");
const { getMember, formatDate } = require("../functions.js");

module.exports.run = async (bot, message, args) => {
    if(!message.guild) return;
    if(!message.member.roles.find(r => r.name === "Moderators" || r.name === "Founder" || r.name === "Administrator"|| r.name === "Moderator Leader")) return message.reply('You dont have permission to use this command!');
    let target = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let reason = args.slice(1).join(' ');
    let logs = message.guild.channels.find(ch => ch.name === "🔍mod-logs");
    if (!target) return message.reply('You need to specify a member!');
    if (!reason) return message.reply('You need to specify a reason!');
    if (!logs) return message.reply(`Cloudn't find channel ``🔍mod-logs```);
    let embed = new Discord.RichEmbed()
        .setColor('BLUE')
        .setThumbnail(target.user.avatarURL)
        .setTitle("[Banned] " + target.user.username)
        .addField('Member:', target)
        .addField('Member ID:', target.user.id)
        .addField('Date:', formatDate(message.createdAt))
        .addField('Reason:', reason)
        .addField('by:', message.author)
        message.channel.send(`${target} has been banned from server!`);
    target.ban(reason);
    logs.send(embed);
};
