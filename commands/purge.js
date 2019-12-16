const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
  if(!message.guild) return;
  if(!message.member.roles.find(r => r.name === "Owner" || r.name === "Administrator")) return message.reply('You dont have permission to use this command!');
  const deleteCount = parseInt(args[0], 10);
  if(!deleteCount) return message.reply("You need to specify number ``<1-100>``");
  if(!deleteCount || deleteCount < 2 || deleteCount > 100) return message.reply("Must be more than `2` and less than `100`") 
  message.channel.bulkDelete(deleteCount).catch(error => message.reply(`${error}`))
} 