const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    // if(message.channel.type == "dm"){
    //     message.author.send("Hi")
    // }
    const categoryId = message.guild.channels.get(ch => ch.name === "tickets")
    var userName = message.author.username;
    var userDiscriminator = message.author.discriminator;
    var bool = false;
    message.guild.channels.forEach((channel) => {
        if (channel.name == userName.toLowerCase() + "-" + userDiscriminator) {
            message.reply("You already have a ticket!");
            bool = true;
        }
    });
    if (bool == true) return;
    message.reply("You created a ticket!");
    message.guild.createChannel(userName + "-" + userDiscriminator, "text").then((createdChan) => {
        createdChan.setParent(categoryId).then((settedParent) => {
            settedParent.overwritePermissions(message.guild.roles.find('name', "@everyone"), { "READ_MESSAGES": false });
            settedParent.overwritePermissions(message.guild.roles.find('name', "Moderators"), { 
                "READ_MESSAGES": true,
                "SEND_MESSAGES": true
            });
            settedParent.overwritePermissions(message.author, {
                "READ_MESSAGES": true, "SEND_MESSAGES": true,
                "ATTACH_FILES": true, "CONNECT": true,
                "CREATE_INSTANT_INVITE": false, "ADD_REACTIONS": true
            });
            var embedParent = new Discord.RichEmbed()
                .setTitle("Hi, " + message.author.username.toString())
                .setDescription("Hello " + message.author.username + ` this is your ticket, you can suggest or report anything for this server.
                React with (❎) to close ticket!`)
                .setColor("BLUE")
            settedParent.send(embedParent).then(embedMessage => {
                embedMessage.react("❎")
                const filter = (r, u) => r.me && !u.bot && message.guild.members.get(u.id).permissions.has('ADMINISTRATOR'),collector = embedMessage.createReactionCollector(filter, { max: 1});                collector.on('collect', (r) => {
                    switch (r.emoji.name) {
                        case '❎': {
                            embedMessage.channel.delete(0);
                            break;
                        }
                    }
                })
            })
        }).catch(err => {
            message.channel.send(err);
        });
    }).catch(err => {
        message.channel.send(err);
    });
}
