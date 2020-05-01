const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();
let p = "tess!"


function emoji (id) {
return client.emojis.get(id).toString();
} 

client.on('ready', () => {
  client.user.setActivity('https://github.com/0CherryTea0/Tess-Bot/',{ type: "PLAYING" })
    client.user.setStatus('idle')
});
           
client.on('message', message => {
	if(message.content.startsWith(p + 'avatar')) {
try {
let mentions1 = message.mentions
		const embed = new Discord.RichEmbed()
		 .setTitle('Аватар пользователя:')
                 .setColor('RANDOM')
		 .setImage(message.mentions.users.first().avatarURL)
		 message.channel.send({embed})
		console.log(`показал аватар ${mentions1[0]} для ${message.author.displayName} в ${message.guild.name}`)
} catch (err) {
message.channel.send('Ты уверен что это человек имеет аватарку?')
		}
	}
});
	
client.on("messageDelete", (msg) => {	
  if (typeof msg.content !== 'undefined'){
  if (msg.author.bot) return;
  if (msg.author.id === "631041923280273438") return; //Пчёлка
  if (msg.author.id === "407474888929181697") return; //Доктор
  if (msg.author.id === "361572142644461570") return; //Аля
  if (msg.author.id === "632228871307001885") return; //Женя
  if (msg.author.id === "405258156063850497") return; //Чаёк
  if (msg.guild.id === "677783637634318365") { 	
    let date = new Date(msg.createdTimestamp);	
    let idmemb = msg.author.id;
    if (typeof msg.attachments[0] !== 'undefined'){    
	console.log('Кинул в лс удаленное сообщение')	
      client.channels.get("674482419415515146").send(`Удалено сообщение от` + "<@" + idmemb + ">" + ` написанное ${date.toUTCString()}: "${msg.content}" \n id пользователя: ${msg.author.id}`);	
    } else {	
      client.channels.get("674482419415515146").send(`Удалено сообщение от` + "<@" + idmemb + ">" + ` написанное ${date.toUTCString()}: "${msg.content}" \n id пользователя: ${msg.author.id}`);	
    };	
  } else {	
    client.channels.get("674482419415515146").send("Удалено сообщение.");	
  };	
 };
});

client.on('messageDelete', message => {
   if (message.attachments.size > 0) { 
        var Attachment = (message.attachments).array();
        message.attachments.forEach(function(attachment) {
            let embed = new Discord.RichEmbed()
             .setColor("#affaff")
             .setImage(attachment.proxyURL)         
            client.channels.get("674482419415515146").send(embed);
   })
 }
});

client.on('message', message => {
     msg = message.content.toLowerCase();
     if(message.author.bot) return;
     mention = message.mentions.users.first();
         if(msg.startsWith (p + "send")) {
           if (mention == null) { return; }
           message.delete();
           mentionMessage = message.content.slice (10);
           mention.sendMessage (mentionMessage);
 }
});

client.on('message', message => {
	if(message.content === (p + 'logo')) {
 try {
	const embed = new Discord.RichEmbed()
		.setTitle('Логотип сервера')
            .setColor('RANDOM')
		.setImage(message.guild.iconURL)
		 message.channel.send({embed})
		console.log(`показал логотип сервера ${message.guild.name} для ${message.author.displayName}`)
 } catch (err) {
message.channel.send('Произошла ошибка, возможно, вы пытаетесь крашнуть бота :D')
		}
	}
});

client.on('message', message => {
    if(message.content.startsWith(p + 'afk on')) {
        const embed = new Discord.RichEmbed()
            .setTitle("AFK")
            .setColor("#00BFFF")
            .setDescription('Вош(е)л(а) в AFK,не мешайте.')
            .setFooter("AFK|Tess bot")
            .setTimestamp();
            message.reply({embed}).then(sentMessage => {
                sentMessage.react('🔜')    
                    .catch(() => console.error('One of the emojis failed to react1.'));
            });
            }
});
 
    client.on('message', message => {
        if(message.content.startsWith(p + 'afk off')) {
            const embed = new Discord.RichEmbed()
                .setTitle("AFK")
                .setColor("#00BFFF")
                .setDescription('Выш(е)л(а) из AFK,теперь он(а) с нами.')
                .setFooter("AFK|Tess bot")
                .setTimestamp();
                message.reply({embed}).then(sentMessage => {
                    sentMessage.react('🔙')
                });     
            }
        });

client.on('message', message => {
if(message.content.includes(p + "invitebot")) {
const embed = new Discord.RichEmbed()
            .setTitle("Приглашение")
            .setColor("#00BFFF")
            .setDescription('Пригласить бота с правами администратора\n https://discordapp.com/api/oauth2/authorize?client_id=466896060682469377&permissions=8&scope=bot\n Пригласить бота без прав администратора\n https://discordapp.com/api/oauth2/authorize?client_id=466896060682469377&permissions=0&scope=bot')
            .setFooter("Tess bot")
            .setTimestamp();
    message.channel.send({embed})
    .catch(console.error)
}
});

client.on('message', message => {
   if(message.content.startsWith(p + "say")) {
      message.delete();
      saymessage = message.content.slice (9)
      message.channel.send(saymessage)
      authormessage = message.author.username
      let sayschannel = client.channels.get("674482419415515146")
      sayschannel.send(authormessage + " написал командой: " + saymessage)
      .catch(console.error)
}

mentionuser = message.mentions.users.first();
   if(message.content.startsWith(p + "burn")) {
     if (mentionuser == null) { return; }
     numberfire = 3
     fireNumber = Math.floor (Math.random() * (numberfire - 1 + 1))+1;
     firemember = message.author
     firedelay = message.content.slice (10)
     message.channel.send(firemember + " сжег(сожгла) " + firedelay, { files: ["./images/burn/" + fireNumber + ".gif"]} )
}
  
   if(message.content.startsWith(p + "sex")) {
     if (mentionuser == null) { return; }
     if (message.channel.nsfw == false) { return message.channel.send("Разрешено только в каналах с nsfw") }

     hentairand = Math.floor(Math.random() * 2) + 1;
     if (hentairand == 1) {
     hentaiCount = 9
     hentaiNumber = Math.floor (Math.random() * (hentaiCount - 1 + 1))+1;
     hentaimember = message.author
     hentaidelay = message.content.slice (9)
     message.channel.send(hentaimember + " отхентаил(а) " + hentaidelay, { files: ["./images/hentai/" + hentaiNumber + ".gif"]} )
     .catch(console.error)
}

   if (hentairand == 2) {
     hentaiCount2 = 9
     hentaimember2 = message.author
     hentaiNumber2 = Math.floor (Math.random() * (hentaiCount2 - 1 + 1))+1;
     hentaidelay2 = message.content.slice (9)
     message.channel.send(hentaimember2 + " отхентаил(а) " + hentaidelay2, { files: ["./images/hentai2/" + hentaiNumber2 + ".gif"]} )
     .catch(console.error)
  }
 }
   
    if(message.content.startsWith(p + "clear")) {
      message.delete()
try {
     delmsg = message.content.slice (11) 
     message.channel.bulkDelete(delmsg).then(() => {
     message.channel.send("Deleted " + delmsg + " messages.").then(msg => msg.delete(3000));

   });
} catch(err) {
 message.channel.send("Вы уверены что указали число сообщений для удаления?")
 }
  }

   if(message.content.startsWith(p + "kick")) {
    message.delete()
    kickCount = 6
    kickNumber = Math.floor (Math.random() * (kickCount - 1 + 1))+1;
    let kickmem = message.content.slice(10).split("/")
    message.channel.send(kickmem[0] + " **ударил** " + kickmem[1], { files: ["./images/kick/" + kickNumber + ".gif"]} )
    .catch(console.error)
 }
 

if(message.content.startsWith(p + "eval")) {

        //Eval command discord.js
    if(cmd === `${prefix}eval`){
        let embed = new Discord.RichEmbed()
        .setTitle("Evaluation")
        .setDescription("Sorry, the `eval` command can only be executed by the Developer.")
        .setColor("#cdf785");
        if(message.author.id !== '405258156063850497') return message.channel.send(embed);
        function clean(text) {
        if (typeof(text) === "string")
          return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        else
            return text;
      }try {
            const code = args.join(" ");
            let evaled = eval(code);
            let rawEvaled = evaled;
            if (typeof evaled !== "string")
              evaled = require("util").inspect(evaled);
      
        let embed = new Discord.RichEmbed()
            .setTitle(`Evaluated in ${Math.round(bot.ping)}ms`)
            .addField(":inbox_tray: Input", `\`\`\`js\n${code}\n\`\`\``)
            .addField(":outbox_tray: Output", `\`\`\`js\n${clean(evaled).replace(bot.token, "No no no")}\n\`\`\``)
            .addField('Type', `\`\`\`xl\n${(typeof rawEvaled).substr(0, 1).toUpperCase() + (typeof rawEvaled).substr(1)}\n\`\`\``)
            .setColor('GREEN');
            message.channel.send({embed});
          } catch (err) {
            
            message.channel.send(`\`ERROR\` \`\`\`js\n${clean(err)}\n\`\`\``);
          }
    }
 
});




client.login(process.env.BOT_SECRET);
