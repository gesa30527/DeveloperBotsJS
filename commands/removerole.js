module.exports.run = async (bot, message, args) => {
    if(!message.guild) return;
    if(!message.member.roles.find(r => r.name === "Moderators" || r.name === "Founder" || r.name === "Administrator"|| r.name === "Moderator Leader"|| r.name === "Trial Moderators"||r.name === "Application Reader")) return message.reply('You dont have permission to use this command!');
    let memberName = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let roleName = args.slice(1).join(' ');
    if(!memberName) return message.reply("You need to specify a member!")
        if(!roleName) return message.reply("You need to specify a role!")
        const rolesGive = message.guild.roles.find("name",roleName)
        if(!rolesGive) return message.reply("Cloudn't find that role!")
        if(!memberName.roles.find(r => r.name === roleName)){
            message.reply(`${memberName} doesn't have a role ${rolesGive}!`)
        }else{
            memberName.removeRole(rolesGive);
            message.reply(`Successfuly removed role ${rolesGive} to ${memberName}!`)
        }
    }
