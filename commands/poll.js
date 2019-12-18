module.exports.run = async (bot, message, args) => {
    if(!message.guild) return;
    if(!message.member.roles.find(r => r.name === "Founder" || r.name === "Administrator"|| r.name === "Moderators")) return message.reply('You dont have permission to use this command!');
        let msgArgs = args.join(" ");
        if(!msgArgs) return message.reply("You need to specify a text!")
        message.channel.send(msgArgs).then(messageReaction => {
        messageReaction.react("👍");
        messageReaction.react("👎");
        message.delete(500).catch(console.error);
    });
}
