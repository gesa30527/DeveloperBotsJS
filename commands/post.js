const Discord = require('discord.js');
const channel = "hiring"

const embed1 = new Discord.RichEmbed()
.setTitle("What's your discord name? ``@YourSelf``")
.setColor("BLUE")
const embed2 = new Discord.RichEmbed()
.setTitle("What are you looking for? ``Scripter``,``Builder``,``GFX``,``GUI Designer`` etc")
.setColor("BLUE")
const embed3 = new Discord.RichEmbed()
.setTitle("How much will you pay? ``<Price>`` - ``Paypal``,``Robux``,``GiftCard`` etc")
.setColor("BLUE")
const embed4 = new Discord.RichEmbed()
.setTitle("Type of game? ``Simulator``,``Tycoon``,``Obby``,``Fighting`` etc")
.setColor("BLUE")
const embed5 = new Discord.RichEmbed()
.setTitle("Please add a description of the post.")
.setColor("BLUE")

const embed6 = new Discord.RichEmbed()
.setTitle("What's your discord name? ``@YourSelf``")
.setColor("BLUE")
const embed7 = new Discord.RichEmbed()
.setTitle("What do you want to sell? `Name of item you want to sell`")
.setColor("BLUE")
const embed8 = new Discord.RichEmbed()
.setTitle("How much price? ``<Price>`` - ``Paypal``,``Robux``,``GiftCard`` etc")
.setColor("BLUE")
const embed9 = new Discord.RichEmbed()
.setTitle("Send image of item you want to sell. `Must be a link!`")
.setColor("BLUE")
const embed10 = new Discord.RichEmbed()
.setTitle("Please add a description of the post.")
.setColor("BLUE")

const embed11 = new Discord.RichEmbed()
.setTitle("What's your discord name? ``@YourSelf``")
.setColor("BLUE")
const embed12 = new Discord.RichEmbed()
.setTitle("What do you know how to do? ``Script``,``Build``,``GFX``,``GUI Design`` etc")
.setColor("BLUE")
const embed13 = new Discord.RichEmbed()
.setTitle("What type of payment and how much? ``<Price>`` - ``Paypal``,``Robux``,``GiftCard`` etc")
.setColor("BLUE")
const embed14 = new Discord.RichEmbed()
.setTitle("Please add a description of the post.")
.setColor("BLUE")


exports.run = (client, message, args) => {
 const channelHire = message.guild.channels.find(ch => ch.name === "hiring");
 const channelToHire = message.guild.channels.find(ch => ch.name === "for-hire");
 const channelSelling = message.guild.channels.find(ch => ch.name === "selling");
 if(!channelHire) return message.reply("Cloudn't find channel ``Hiring``")
 if(!channelToHire) return message.reply("Cloudn't find channel ``For-hire``")
 if(!channelSelling) return message.reply("Cloudn't find channel ``Selling``")
 const arg = args[0];
 if(!arg) return message.reply("You need to specify ``Hiring`` or ``Selling`` or ``ForHire``")
 if(arg.toLowerCase() === "hiring"){
  let embed = new Discord.RichEmbed()
  const collector1 = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { max:1 ,time: 60000 });
  message.channel.send(embed1).then(message => {
  message.delete(60000).catch(console.error)})
  collector1.on('collect', message1 =>{

    const collector2 = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { max:1 ,time: 60000 });  
    embed.addField(`Username` ,`${message1}`)
    message.channel.send(embed2).then(message => {
    message.delete(60000).catch(console.error)})
    collector2.on('collect', message2 => {

        const collector3 = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { max:1 ,time: 60000 });  
        embed.addField(`Looking for` ,`${message2}`)
        message.channel.send(embed3).then(message => {
        message.delete(60000).catch(console.error)})
        collector3.on('collect', message3 => {

          const collector4 = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { max:1 ,time: 60000 });
          embed.addField(`Payment` ,`${message3}`)
          message.channel.send(embed4).then(message => {
          message.delete(60000).catch(console.error)})
          collector4.on('collect', message4 => {

            const collector5 = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { max:1 ,time: 60000 });
            embed.addField(`Type of game` ,`${message4}`)
            message.channel.send(embed5).then(message => {
            message.delete(60000).catch(console.error)})
            collector5.on('collect', message5 => {

            embed.setDescription(message5)
            embed.setColor("BLUE")
            embed.setThumbnail(message.author.avatarURL||message.author.displayAvatarURL)
            embed.setTitle(`[Hiring] ${message.author.username}`)
            let ch = message.guild.channels.find(x => x.name === "post-approval")
            if (ch) {
              message.reply("Your post has been sent for approval!")
              ch.send({embed}).then(embedMessage => {
                embedMessage.react("✅");
                embedMessage.react("❎")
                const filter = (r, u) => r.me && !u.bot && message.guild.members.get(u.id).permissions.has('ADMINISTRATOR'),collector = embedMessage.createReactionCollector(filter, { max: 1});
                collector.on('collect', (r) => {
                    switch (r.emoji.name) {
                        case '✅': {
                            embed.setFooter(`✅ Accepted!`);
                            embedMessage.edit(embed)
                            channelHire.send(embed)
                            message.author.send("Your post was approved!")
                            break;
                        }
                        case '❎': {
                          embed.setFooter(`❎ Declined!`);
                            embedMessage.edit(embed)
                            message.author.send("Your post was declined!")
                            embedMessage.delete(3000);
                            break;
                        }
                    }
                })
                      })
                    }
                })
                collector5.on('end', (collected, reason) => {if (reason === "time"){message.channel.send("Times Up!")}});
            })
            collector4.on('end', (collected, reason) => {if (reason === "time"){message.channel.send("Times Up!")}});
        })
        collector3.on('end', (collected, reason) => {if (reason === "time"){message.channel.send("Times Up!")}});
    })
    collector2.on('end', (collected, reason) => {if (reason === "time"){message.channel.send("Times Up!")}});
})
collector1.on('end', (collected, reason) => {if (reason === "time"){message.channel.send("Times Up!")}});
}
if(arg.toLowerCase() === "selling"){
    let embed = new Discord.RichEmbed()
    const collector11 = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { max:1 ,time: 60000 });
    message.channel.send(embed6).then(message => {
    message.delete(60000).catch(console.error)})
    collector11.on('collect', message11 =>{
  
      const collector21 = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { max:1 ,time: 60000 });  
      embed.addField(`Username` ,`${message11}`)
      message.channel.send(embed7).then(message => {
      message.delete(60000).catch(console.error)})
      collector21.on('collect', message21 => {
  
          const collector31 = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { max:1 ,time: 60000 });  
          embed.addField(`Selling` ,`${message21}`)
          message.channel.send(embed8).then(message => {
          message.delete(60000).catch(console.error)})
          collector31.on('collect', message31 => {
  
            const collector41 = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { max:1 ,time: 60000 });
            embed.addField(`Payment` ,`${message31}`)
            message.channel.send(embed9).then(message => {
            message.delete(60000).catch(console.error)})
            collector41.on('collect', message41 => {
  
              const collector51 = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { max:1 ,time: 60000 });
              embed.addField("Image", message41)
              message.channel.send(embed10).then(message => {
              message.delete(60000).catch(console.error)})
              collector51.on('collect', message51 => {
  
              embed.setDescription(message51)
              embed.setColor("BLUE")
              embed.setThumbnail(message.author.avatarURL||message.author.displayAvatarURL)
              embed.setTitle(`[Selling] ${message.author.username}`)
              let ch = message.guild.channels.find(x => x.name === "post-approval")
              if (ch) {
                message.reply("Your post has been sent for approval!")
                ch.send({embed}).then(embedMessage => {
                  embedMessage.react("✅");
                  embedMessage.react("❎")
                  const filter = (r, u) => r.me && !u.bot && message.guild.members.get(u.id).permissions.has('ADMINISTRATOR'),collector = embedMessage.createReactionCollector(filter, { max: 1});
                  collector.on('collect', (r) => {
                      switch (r.emoji.name) {
                          case '✅': {
                              embed.setFooter(`✅ Accepted!`);
                              embedMessage.edit(embed)
                              channelSelling.send(embed)
                              message.author.send("Your post was approved!")
                              break;
                          }
                          case '❎': {
                            embed.setFooter(`❎ Declined!`);
                              embedMessage.edit(embed)
                              message.author.send("Your post was declined!")
                              embedMessage.delete(3000);
                              break;
                          }
                      }
                  })
                        });
                      }
                  })
                  collector51.on('end', (collected, reason) => {if (reason === "time"){message.channel.send("Times Up!")}});
              })
              collector41.on('end', (collected, reason) => {if (reason === "time"){message.channel.send("Times Up!")}});
          })
          collector31.on('end', (collected, reason) => {if (reason === "time"){message.channel.send("Times Up!")}});
      })
      collector21.on('end', (collected, reason) => {if (reason === "time"){message.channel.send("Times Up!")}});
  })
  collector11.on('end', (collected, reason) => {if (reason === "time"){message.channel.send("Times Up!")}});
  }
if(arg.toLowerCase() === "forhire"){
    let embed = new Discord.RichEmbed()
    const collector111 = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { max:1 ,time: 60000 });
    message.channel.send(embed11).then(message => {
    message.delete(60000).catch(console.error)})
    collector111.on('collect', message111 =>{
  
      const collector211 = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { max:1 ,time: 60000 });  
      embed.addField(`Username` ,`${message111}`)
      message.channel.send(embed12).then(message => {
      message.delete(60000).catch(console.error)})
      collector211.on('collect', message211 => {
  
          const collector311 = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { max:1 ,time: 60000 });  
          embed.addField(`Knows` ,`${message211}`)
          message.channel.send(embed13).then(message => {
          message.delete(60000).catch(console.error)})
          collector311.on('collect', message311 => {
  
            const collector411 = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { max:1 ,time: 60000 });
            embed.addField(`Payment` ,`${message311}`)
            message.channel.send(embed14).then(message => {
            message.delete(60000).catch(console.error)})
            collector411.on('collect', message411 => {
  
              embed.setDescription(message411)
              embed.setColor("BLUE")
              embed.setThumbnail(message.author.avatarURL||message.author.displayAvatarURL)
              embed.setTitle(`[To Hire] ${message.author.username}`)
              let ch = message.guild.channels.find(x => x.name === "post-approval")
              if (ch) {
                message.reply("Your post has been sent for approval!")
                ch.send({embed}).then(embedMessage => {
                  embedMessage.react("✅");
                  embedMessage.react("❎")
                  const filter = (r, u) => r.me && !u.bot && message.guild.members.get(u.id).permissions.has('ADMINISTRATOR'),collector = embedMessage.createReactionCollector(filter, { max: 1});
                  collector.on('collect', (r) => {
                      switch (r.emoji.name) {
                          case '✅': {
                              embed.setFooter(`✅ Accepted!`);
                              embedMessage.edit(embed)
                              channelToHire.send(embed)
                              message.author.send("Your post was approved!")
                              break;
                          }
                          case '❎': {
                            embed.setFooter(`❎ Declined!`);
                              embedMessage.edit(embed)
                              message.author.send("Your post was declined!")
                              embedMessage.delete(3000);
                              break;
                          }
                      }
                  })
              });
                      }
                  })
                  collector411.on('end', (collected, reason) => {if (reason === "time"){message.channel.send("Times Up!")}});
              })
              collector311.on('end', (collected, reason) => {if (reason === "time"){message.channel.send("Times Up!")}});
          })
          collector211.on('end', (collected, reason) => {if (reason === "time"){message.channel.send("Times Up!")}});
      })
      collector111.on('end', (collected, reason) => {if (reason === "time"){message.channel.send("Times Up!")}});
  }
}
