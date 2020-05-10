const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();
let p = "tess!"


function emoji (id) {
return client.emojis.get(id).toString();
} 

client.on('ready', () => {
 
  client.user.setActivity('tess!help',{ type: "PLAYING" })
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
    if(message.content.startsWith(p + 'afkon')) {
        let hex = message.content.split(" ");
        const embed = new Discord.RichEmbed()
            .setTitle("AFK")
            .setColor(hex[1])
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
        if(message.content.startsWith(p + 'afkoff')) {
            let hex2 = message.content.split(" ")
            const embed = new Discord.RichEmbed()
                .setTitle("AFK")
                .setColor(hex2[1])
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
  if(message.content.startsWith(p + "help")) {
   const helpembed = new Discord.RichEmbed()
    .setTitle("Мои команды")
    .setColor("#affaff")
    .setDescription(
     "**tess!logo** - украсть аватарку сервера\n" +
     "**tess!say {message}** - сообщение от имени бота\n" +
     "**tess!clear {0-99}** - очистить указанное число сообщений\n" +
     "**tess!invitebot** - пригласить бота к себе на сервере\n" +
     "**tess!afkon #hex** - войти в афк режим (можно выбрать самому цвет эмбеда)\n" +
     "**tess!afkoff #hex** - выйти из афк режима (можно выбрать самому цвет эмбеда)\n" +
     "**tess!avatar {@user}** - украсть аватарку человека\n" +
     "**tess!burn {@user}** - сжечь пользователя\n" +
     "***Список будет дополняться по мере создания команд***"
  )
    .setFooter("Help|TessBot")
    .setTimestamp()
    message.channel.send(helpembed)
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
      message.delete();
      delmsg = message.content.split(" ");     
     if(Boolean(Number(delmsg[1]))) {
   message.channel.bulkDelete(delmsg[1]).then(() => {
   message.channel.send("Удалено " + delmsg[1] + " сообщений").then(msg => msg.delete(1500));
  });
  } else {
   message.channel.send("Число мне, число давай")
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
})

//ЗОНА ЭКСПЕРИМЕНТОВ
client.on('message', message => {
 if(message.content.startsWith(p + "leave")) {
  let guildID = message.guild.id
  let leaveemb = new Discord.RichEmbed()
   .setTitle("Прощание с сервером")
   .setColor("#affaff")
   .setDescription("Участники этого сервера, хочу сообщить, что мне не нравится тут находиться и я ухожу, всем до свидания") 
  message.delete().then(() => {
   message.channel.send(leaveemb).then(() => {
   message.guild.leave(guildID)
   })
  })
 }
})
 
client.on("message", message => {
  const args = message.content.split(" ").slice(1);
  
  
 
  if (message.content.startsWith(p + "eval")) {
    try {
    function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}
      const code = args.join(" ");
      let evaled = eval(code);
 
      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
 
      message.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  }
});


client.login(process.env.BOT_SECRET);
