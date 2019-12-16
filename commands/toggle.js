module.exports.run = async (bot, message, args) => {
if(!args[0]) return message.reply("You need to specify ``rolePing``, type ``?togglelist`` for more info!")
/////////////////////////////////////////////////////////////////////////////////
if(!message.guild) return;
if(args[0].toLowerCase() === "eventsping"){
    const roleE = message.member.guild.roles.find("name", "Events Ping")
        if(!roleE) return message.reply("Cloud't find role ``Event Ping``!");
        if(!args[1]) return message.reply("You need to specify ``<on-off>``")
        if(args[1].toLowerCase() === "on"){
        if(!message.member.roles.find(r => r === roleE )){
            message.member.addRole(roleE);
            message.reply(`Successfuly added you to the ${roleE} role!`)
        }else{
            message.reply(`You already have a role ${roleE}!`)
            }
        }
        if(args[1].toLowerCase() === "off"){
        if(!message.member.roles.find(r => r === roleE )){
            message.reply(`You don't have a role ${roleE}!`)
        }else{
            message.member.removeRole(roleE);
            message.reply(`Successfuly removed you from the ${roleE} role!`)
        }
    }
}
/////////////////////////////////////////////////////////////////////////////////
if(args[0].toLowerCase() === "partnerping"){
    const roleP = message.member.guild.roles.find("name", "Partner Ping")
        if(!roleP) return message.reply("Cloud't find role ``Partner Ping``!");
        if(!args[1]) return message.reply("You need to specify ``<on-off>``")
        if(args[1].toLowerCase() === "on"){
        if(!message.member.roles.find(r => r === roleP )){
            message.member.addRole(roleP);
            message.reply(`Successfuly added you to the ${roleP} role!`)
        }else{
            message.reply(`You already have a role ${roleP}!`)
            }
        }
        if(args[1].toLowerCase() === "off"){
        if(!message.member.roles.find(r => r === roleP )){
            message.reply(`You don't have a role ${roleP}!`)
        }else{
            message.member.removeRole(roleE);
            message.reply(`Successfuly removed you from the ${roleP} role!`)
        }
    }
}
/////////////////////////////////////////////////////////////////////////////////
if(args[0].toLowerCase() === "newsping"){
    const roleN = message.member.guild.roles.find("name", "News Ping")
        if(!roleN) return message.reply("Cloud't find role ``News Ping``!");
        if(!args[1]) return message.reply("You need to specify ``<on-off>``")
        if(args[1].toLowerCase() === "on"){
        if(!message.member.roles.find(r => r === roleN )){
            message.member.addRole(roleN);
            message.reply(`Successfuly added you to the ${roleN} role!`)
        }else{
            message.reply(`You already have a role ${roleN}!`)
            }
        }
        if(args[1].toLowerCase() === "off"){
        if(!message.member.roles.find(r => r === roleN )){
            message.reply(`You don't have a role ${roleN}!`)
        }else{
            message.member.removeRole(roleN);
            message.reply(`Successfuly removed you from the ${roleN} role!`)
        }
    }
}
/////////////////////////////////////////////////////////////////////////////////
if(args[0].toLowerCase() === "hireable"){
    const roleH = message.member.guild.roles.find("name", "Hire Able")
        if(!roleH) return message.reply("Cloud't find role ``Hire Able``!");
        if(!args[1]) return message.reply("You need to specify ``<on-off>``")
        if(args[1].toLowerCase() === "on"){
        if(!message.member.roles.find(r => r === roleH )){
            message.member.addRole(roleH);
            message.reply(`Successfuly added you to the ${roleH} role!`)
        }else{
            message.reply(`You already have a role ${roleH}!`)
            }
        }
        if(args[1].toLowerCase() === "off"){
        if(!message.member.roles.find(r => r === roleH )){
            message.reply(`You don't have a role ${roleH}!`)
        }else{
            message.member.removeRole(roleH);
            message.reply(`Successfuly removed you from the ${roleH} role!`)
        }
    }
}
/////////////////////////////////////////////////////////////////////////////////
if(args[0].toLowerCase() === "nonhireable"){
    const roleNH = message.member.guild.roles.find("name", "Non Hire Able")
        if(!roleNH) return message.reply("Cloud't find role ``Non Hire Able``!");
        if(!args[1]) return message.reply("You need to specify ``<on-off>``")
        if(args[1].toLowerCase() === "on"){
        if(!message.member.roles.find(r => r === roleNH )){
            message.member.addRole(roleNH);
            message.reply(`Successfuly added you to the ${roleNH} role!`)
        }else{
            message.reply(`You already have a role ${roleNH}!`)
            }
        }
        if(args[1].toLowerCase() === "off"){
        if(!message.member.roles.find(r => r === roleNH )){
            message.reply(`You don't have a role ${roleNH}!`)
        }else{
            message.member.removeRole(roleNH);
            message.reply(`Successfuly removed you from the ${roleNH} role!`)
        }
    }
}
/////////////////////////////////////////////////////////////////////////////////
if(args[0].toLowerCase() === "qatester"){
    const roleQ = message.member.guild.roles.find("name", "Qa Tester")
        if(!roleQ) return message.reply("Cloud't find role ``Qa Tester``!");
        if(!args[1]) return message.reply("You need to specify ``<on-off>``")
        if(args[1].toLowerCase() === "on"){
        if(!message.member.roles.find(r => r === roleQ )){
            message.member.addRole(roleQ);
            message.reply(`Successfuly added you to the ${roleQ} role!`)
        }else{
            message.reply(`You already have a role ${roleQ}!`)
            }
        }
        if(args[1].toLowerCase() === "off"){
        if(!message.member.roles.find(r => r === roleQ )){
            message.reply(`You don't have a role ${roleQ}!`)
        }else{
            message.member.removeRole(roleQ);
            message.reply(`Successfuly removed you from the ${roleQ} role!`)
        }
    }
}
/////////////////////////////////////////////////////////////////////////////////
if(args[0].toLowerCase() === "investor"){
    const roleI = message.member.guild.roles.find("name", "Investor")
        if(!roleI) return message.reply("Cloud't find role ``Investor``!");
        if(!args[1]) return message.reply("You need to specify ``<on-off>``")
        if(args[1].toLowerCase() === "on"){
        if(!message.member.roles.find(r => r === roleI )){
            message.member.addRole(roleI);
            message.reply(`Successfuly added you to the ${roleI} role!`)
        }else{
            message.reply(`You already have a role ${roleI}!`)
            }
        }
        if(args[1].toLowerCase() === "off"){
        if(!message.member.roles.find(r => r === roleI )){
            message.reply(`You don't have a role ${roleI}!`)
        }else{
            message.member.removeRole(roleI);
            message.reply(`Successfuly removed you from the ${roleI} role!`)
        }
    }
}
/////////////////////////////////////////////////////////////////////////////////
if(args[0].toLowerCase() === "languagetranslator"){
    const roleL = message.member.guild.roles.find("name", "Language Translator")
        if(!roleL) return message.reply("Cloud't find role ``Language Translator``!");
        if(!args[1]) return message.reply("You need to specify ``<on-off>``")
        if(args[1].toLowerCase() === "on"){
        if(!message.member.roles.find(r => r === roleL )){
            message.member.addRole(roleL);
            message.reply(`Successfuly added you to the ${roleL} role!`)
        }else{
            message.reply(`You already have a role ${roleL}!`)
            }
        }
        if(args[1].toLowerCase() === "off"){
        if(!message.member.roles.find(r => r === roleL )){
            message.reply(`You don't have a role ${roleL}!`)
        }else{
            message.member.removeRole(roleL);
            message.reply(`Successfuly removed you from the ${roleL} role!`)
        }
    }
}
/////////////////////////////////////////////////////////////////////////////////
}