const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(!message.guild) return;
    if(!message.member.roles.find(r => r.name === "Modernator" || r.name === "Owner" || r.name === "Administrator")) return message.reply('You dont have permission to use this command!');
    let target = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let reason = args.slice(1).join(' ');
    let logs = message.guild.channels.find(ch => ch.name === "logs");
    if (!target) return message.reply('You need to specify a member!');
    if (!reason) return message.reply('You need to specify a reason!');
    if (!logs) return message.reply(`Cloudn't find channel ``logs```);
    let embed = new Discord.RichEmbed()
    .setColor('BLUE')
        .setThumbnail(target.user.avatarURL)
        .setTitle("[KICKED] " + target.user.username)
        .addField('Member:', target)
        .addField('Member ID:', target.user.id)
        .addField('Date:', formatDate(message.createdAt))
        .addField('Reason:', reason)
        .addField('by:', message.author)
        message.channel.send(`${target} has been kicked from server!`);
    target.kick(reason);
    logs.send(embed);
};