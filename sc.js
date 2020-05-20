const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();
let p = "tess!"



function emoji (id) {
return client.emojis.get(id).toString();
} 

client.on('ready', () => {
/*
  console.log("start interval");
  setInterval(() => {    
  let bl = "520620860722249740"
   message.guild.leave(bl)
   .catch(console.error);
}, 120000);
*/
  let tbsite = "https://tessbot.onrender.com/"
  client.user.setActivity('tess!help ' + tbsite,{ type: "PLAYING" })
    client.user.setStatus('idle')
});
           
client.on('message', message => {
	if(message.content.startsWith(p + 'avatar')) {
 try {
		const embed = new Discord.RichEmbed()
		 .setTitle('Аватар пользователя:')
                 .setColor('RANDOM')
		 .setImage(message.mentions.users.first().avatarURL)
                 .setFooter("Аватар|Tess bot")
                 .setTimestamp()
		 message.channel.send(embed)

  } catch (err) {
   message.channel.send("Пользователя мне, пользователя")
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
            .setDescription (
             "[Пригласить бота](https://discord.com/api/oauth2/authorize?client_id=479713309881532416&permissions=8&scope=bot"
             )
            .setFooter("Приглашение|Tess bot")
            .setTimestamp();
    message.channel.send(embed)
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
  /*
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
*/
    if(message.content.startsWith(p + "clear")) {
      message.delete();
      delmsg = message.content.split(" ");     
     if(Boolean(Number(delmsg[1]))) {
   message.channel.bulkDelete(delmsg[1]).then(() => {
   message.channel.send("Удалено " + delmsg[1] + " сообщений").then(msg => msg.delete(1500));
  });
  } else {
   message.channel.send("Число мне, число давай").then(msg => msg.delete(1500));
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


client.on('message', message => {
  if(message.content.startsWith(p + "bgl")) {
   client.guilds.forEach(i => { console.log(i.name + " : " + i.id)})
 }
  if(message.content.startsWith(p + "sex")) {
   if (mentionuser == null) return; 
     if (message.channel.nsfw == false) { return message.channel.send("Разрешено только в каналах с nsfw") }
   let hentimg = [
    'https://cdn.discordapp.com/attachments/674482419415515146/712583114576101426/5.gif',
    'https://cdn.discordapp.com/attachments/674482419415515146/712583115176149023/7.gif',
    'https://cdn.discordapp.com/attachments/674482419415515146/712583115398184960/1.gif',
    'https://cdn.discordapp.com/attachments/674482419415515146/712583116379914240/9.gif',
    'https://cdn.discordapp.com/attachments/674482419415515146/712583116941950996/3.gif',
    'https://cdn.discordapp.com/attachments/674482419415515146/712583261548970024/7-1.gif',
    'https://cdn.discordapp.com/attachments/674482419415515146/712583262614192128/2.gif',
    'https://cdn.discordapp.com/attachments/674482419415515146/712583263817826384/3-1.gif',
    'https://cdn.discordapp.com/attachments/674482419415515146/712583264384057385/8.gif',
    'https://cdn.discordapp.com/attachments/674482419415515146/712583265583890483/5-1.gif',
    'https://cdn.discordapp.com/attachments/674482419415515146/712583266343059486/4.gif',
    'https://img2.gelbooru.com/images/57/af/57afbfed1448d4fc672938339bc5ab9c.gif',
    'https://tbib.org/images/1400/586f25137fc90043cd42c455c5fb48b347da062d.gif?1399296',
    'https://img2.gelbooru.com/images/74/73/74733cc93cf450380027dc27fd388526.gif',
    'http://porngipfy.com/content/2016/01/anal-porn-via-analmom69.gif',
    'https://thehentaiworld.com/wp-content/uploads/Uehara-Ami-Love-Selection-Hentai-GIF.gif',
    'https://hopebedandbreakfast.com/img/736591cd2cae98c9b79e133bdd374853.gif',
    'https://tbib.org/images/956/bd80c6c539749f6fc916467f1fdd148c30f72cde.gif?955469',
    'https://img2.gelbooru.com/images/32/1d/321d6bbebb443f5ccc6c502f0883d5c7.gif',
    'https://78.media.tumblr.com/f0c3d0dbfdfe9bdd75ce7c37c31d63fb/tumblr_pd03uqpZiF1uesqwz_1280.gif',
    'https://img2.gelbooru.com/images/d5/40/d540c8b44e6edb5cdf61861b2527c792.gif',
    'https://tbib.org/images/1418/70443fd279ad2024c301c2d0c96ad3c0a2f3d8b7.gif?1549626',
    'http://img3.uploadhouse.com/fileuploads/7923/7923017ed92ded6d0443efeb9af8e849b008a03.gif',
    'https://img2.gelbooru.com/images/d9/84/d9843e98a704240e292082f592e09361.gif',
    'https://tbib.org/images/1419/d66f1de4f703e6a94c331dda8197a7133d621d76.gif?1714656',
    'https://tbib.org/images/1511/3cc4f3ff4acb9586f1de6e0f2da13334bbaaad1a.gif?2024741',
    'https://img2.gelbooru.com/images/51/3d/513dbb1758dbc04f0d00644e07864e42.gif',
    'https://cdn.discordapp.com/attachments/674482419415515146/712590857009627137/thumbnail.gif']
    let hentimgrand = Math.floor(Math.random() * hentimg.length);
    let hentaimember = message.author;
    let hentgif = message.content.split(" ");
    let hentembed = new Discord.RichEmbed()
    .setColor("#affaff")
    .setDescription(hentaimember + " **отхентаил(а)** " + hentgif[1])
    .setImage(hentimg[hentimgrand])
    .setFooter("TessBot|Hentai")
    .setTimestamp()
    message.channel.send(hentembed)
 }
})

client.on("guildMemberAdd", member => {
     let user = member.user;
     let joinrole = '710726576224075838';
     user.addRole(joinrole)
});


client.login(process.env.BOT_SECRET);
