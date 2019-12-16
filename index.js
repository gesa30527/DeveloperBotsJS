const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = ",";

client.on('ready', () =>{
    console.log("bot is online!");
    setInterval(() => {
    client.user.setActivity("ULTIMATE",{type: "WATCHING"})
	}, 5000)
});

client.on("message", message => {
	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;
	let command = message.content.split(" ")[0]; 
	command = command.slice(prefix.length);
    let args = message.content.split(" ").slice(1);
	try {
		let commandFile = require(`./commands/${command.toLowerCase()}.js`);
		commandFile.run(client, message, args);
	} catch (err) {
		message.reply("Unknown command, say ``,help`` to see all commands.");
	}
});

client.login(proces.env.token)
