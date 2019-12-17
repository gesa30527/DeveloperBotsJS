module.exports.run = async (bot, message, args) => {
    if(!message.guild) return;
    if(!message.member.roles.find(r => r.name === "Moderators" || r.name === "Owner" || r.name === "Administrator")) return message.reply('You dont have permission to use this command!');
    let memberName = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let roleName = args.slice(1).join(' ');
    if(!memberName) return message.reply("You need to specify a member!")
        if(!roleName) return message.reply("You need to specify a role!")
        const rolesGive = message.guild.roles.find("name",roleName)
        if(!rolesGive) return message.reply("Cloudn't find that role!")
        if(!memberName.roles.find(r => r.name === roleName)){
            memberName.addRole(rolesGive);
            message.reply(`Successfuly added role ${rolesGive} to ${memberName}!`)
        }else{
            message.reply(`${memberName} already has a role ${roleName}!`)
        }
    }
