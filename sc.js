const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();
let p = "tess!"
let id2 = '<@405258156063850497>'
//client.count = require("./count.json")
let ap = "="

function emoji (id) {
return client.emojis.get(id).toString();
} 

client.on('ready', () => {


/*
class Reminder 
{ 
  constructor(timeString, callback)
  {
       this.remindHandler = callback;
       let timeArray = timeString.split(':');
       this.hours = parseInt(timeArray[0]);
       this.minutes = parseInt(timeArray [1]);
       this.updateTimer();
}

updateTimer()
{
    let now = new Date();

   let remindTime = new Date();

   remindTime.setHours(this.hours);
   remindTime.setMinutes(this.minutes);

   if(now.getTime() == remindTime.getTime()) this.remindHandler();
   if(now >= remindTime ) remindTime.setDate(remindTime.getDate() + 1);

console.log('time to reminder: ' + (remindTime - now));

setTimeout(this.updateTimer.bind(this), remindTime - now);
}
}
//9:15
let reminder = new Reminder('11:15', () => {

client.fetchWebhook('698513073270423633', '6ZbT_naWDiAwPRJKmLR1y_XUkrBrhYbA5AQ8woNTZ5MTPyXgFFaxPHNtS5I0YjGUy6Az').then(webhook => {
			webhook.send("@everyone, до события в игре осталось 15 минут.")
               
 });


});

class Reminder2
{ 
  constructor(timeString, callback)
  {
       this.remindHandler = callback;
       let timeArray = timeString.split(':');
       this.hours = parseInt(timeArray[0]);
       this.minutes = parseInt(timeArray [1]);
       this.updateTimer();
}

updateTimer()
{
    let now2 = new Date();

   let remindTime2 = new Date();

   remindTime2.setHours(this.hours);
   remindTime2.setMinutes(this.minutes);

   if(now2.getTime() == remindTime2.getTime()) this.remindHandler();
   if(now2 >= remindTime2 ) remindTime2.setDate(remindTime2.getDate() + 1);

console.log('time to reminder evening: ' + (remindTime2 - now2));

setTimeout(this.updateTimer.bind(this), remindTime2 - now2);
}
}
//9:15
let reminder2 = new Reminder2('18:45', () => {

client.fetchWebhook('698513073270423633', '6ZbT_naWDiAwPRJKmLR1y_XUkrBrhYbA5AQ8woNTZ5MTPyXgFFaxPHNtS5I0YjGUy6Az').then(webhook => {
			webhook.send("@everyone, до события в игре осталось 15 минут.")
               
 });


});

class Reminder3
{ 
  constructor(timeString, callback)
  {
       this.remindHandler = callback;
       let timeArray = timeString.split(':');
       this.hours = parseInt(timeArray[0]);
       this.minutes = parseInt(timeArray [1]);
       this.updateTimer();
}

updateTimer()
{
    let now3 = new Date();

   let remindTime3 = new Date();

   remindTime3.setHours(this.hours);
   remindTime3.setMinutes(this.minutes);

   if(now3.getTime() == remindTime3.getTime()) this.remindHandler();
   if(now3 >= remindTime3 ) remindTime3.setDate(remindTime3.getDate() + 1);

console.log('time to reminder evening 2: ' + (remindTime3 - now3));

setTimeout(this.updateTimer.bind(this), remindTime3 - now3);
}
}
//00:50
let reminder3 = new Reminder3('19:35', () => {

client.fetchWebhook('698513073270423633', '6ZbT_naWDiAwPRJKmLR1y_XUkrBrhYbA5AQ8woNTZ5MTPyXgFFaxPHNtS5I0YjGUy6Az').then(webhook => {
			webhook.send("@everyone, до события в игре осталось 15 минут.")
               

*/


/*
client.user.setActivity('https://juniper.bot',{ type: "PLAYING" })
    client.user.setStatus('invisible')
*/

            setInterval(() => {
                


                 client.user.setActivity("на время по мск - " + new Date().toLocaleTimeString('ru', {
        timeZone: 'Europe/Moscow',
hour: 'numeric',
hour12: false ,
minute: 'numeric',
second: 'numeric',
    }), {
                    type: 'WATCHING'
                
           })
            }, 5000)
        


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
/*
client.on("message",(message) =>

	{  

	    if(message.content.startsWith(p + 'inv')) {
                 message.delete()
	    {
	        message.channel.createInvite({temporary : true})

	       .then(inv =>message.channel.sendMessage (`https://discord.gg/${inv.code} `));                   

	    }
}
	});
*/
	 

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
    
    //let attachment1 = (msg.attachments)
    if (typeof msg.attachments[0] !== 'undefined'){  
  
	console.log('Кинул в лс удаленное сообщение')	
      client.channels.get("692612229224202260").send(`Удалено сообщение от` + "<@" + idmemb + ">" + ` написанное ${date.toUTCString()}: "${msg.content}" \n id пользователя: ${msg.author.id}`);	
    } else {	
      client.channels.get("692612229224202260").send(`Удалено сообщение от` + "<@" + idmemb + ">" + ` написанное ${date.toUTCString()}: "${msg.content}" \n id пользователя: ${msg.author.id}`);	
    };	
  } else {	
    client.channels.get("692612229224202260").send("Удалено сообщение.");	
  };	
 };
});

 /*                                
client.on('messageDelete', message => {
if(message.author.id == message.author.id) {
if(!message.attachments.first()) return 
   let embed = new Discord.RichEmbed()
  .setColor("#faafff")
  .setImage(message.attachments.first().proxyURL)
client.guilds.cache.get('677783637634318365')
 .channel.cache.get('692612229224202260').send(embed)
}
});
*/

client.on('message', message => {
     msg = message.content.toLowerCase();

if(message.author.bot) return;

mention = message.mentions.users.first();

         if(msg.startsWith (p + "send")) {
           if (mention == null) { return; }
           message.delete();
           mentionMessage = message.content.slice (10);
           mention.sendMessage (mentionMessage);
           message.channel.send("done!")

}
/*
if(msg.includes( emoji("583194072190156811"))) {
let emojiCounter = client.count["counter"].sadEmoji;
client.count ["counter"] = {
sadEmoji: emojiCounter + 1
}
fs.writeFile ("./count.json", JSON.stringify (client.count, null, 4), err => {
if (err) throw err;
message.channel.send("emoji counted")

});

 }
*/
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
/*
client.on('message', message => {
    if(message.content.startsWith("tesshelp') {
        const embed = new Discord.RichEmbed()
            .setTitle("Помощь")
            .setColor("#00BFFF")
            .setDescription('Мои команды \n **tess!help** - команды бота \n **tess!afk on** - войти в AFK \n **tess!afk off** - выйти из AFK \n **tess!logo** - стырить лого сервера \n **tess!avatar (@user)** - стырить аву пользователя \n **tess!invitebot** - пригласить бота к себе на сервер \n **tess!send (@user) (message)** - отправить сообщение от имени бота пользователю в личные сообщения (команда бесполезная, но играться можно) \n **tess!say (message)** - написать сообщение в чате от имени бота \n **tess!burn (@user)** - сжечь пользователя \n \n ***Этот список будет дополняться т.к автор ленивая жопа***')
            .setFooter("Tess bot")
            .setTimestamp();
    message.channel.send({embed}).then(sentMessage => {   
            sentMessage.react('🇭')
                .then(() => sentMessage.react('🇪'))
                    .then(() => sentMessage.react('🇱'))
                    .then(() => sentMessage.react('🇵'))
                    
                    .catch(console.error)
           
        });
      

    }
});
*/

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

/*
if(message.content.startsWith(p + "say2")) {
      message.delete();
      saymessage2 = message.content.slice (10)
      client.fetchWebhook('698513073270423633', '6ZbT_naWDiAwPRJKmLR1y_XUkrBrhYbA5AQ8woNTZ5MTPyXgFFaxPHNtS5I0YjGUy6Az').then(webhook => {
			webhook.send(saymessage2)
                .catch(console.error)
 });
      

 }
*/
   
   if(message.content.startsWith(p + "kick")) {
    message.delete()
    kickCount = 6
    kickNumber = Math.floor (Math.random() * (kickCount - 1 + 1))+1;
    //let kickmem2 = message.mentions.users.first()
    let kickmem = message.content.slice(10).split("/")
    message.channel.send(kickmem[0] + " **ударил** " + kickmem[1], { files: ["./images/kick/" + kickNumber + ".gif"]} )
    .catch(console.error)
}
   
  if(message.content.startsWith(p + "kick2")) {
    message.delete()
    kickCount2 = 6
    kickNumber2 = Math.floor (Math.random() * (kickCount2 - 1 + 1))+1;
    //let kickmem3 = message.mentions.users.first()
    let kickmem2 = message.content.slice(10).split("/")
    client.channels.get("677796816678551583").send(kickmem2[0] + " **ударил** " + kickmem2[1], { files: ["./images/kick/" + kickNumber2 + ".gif"]} )
    .catch(console.error)
}
 if(message.content.includes(ap + "music")) {
  let warnmem = message.author.id
if (message.channel.id !== "677858308878630942") {
 message.channel.send("<@" + warnmem + ">" + ", убедительная просьба, использовать команды музыкального бота в соответствующем канале — <#677858308878630942>")

}
   }

if(message.content.startsWith(p + "sexx")) {
     let hentaiCount = 9
     let hentaiNumber = Math.floor (Math.random() * (hentaiCount - 1 + 1))+1;
     let hent = message.content.slice(9).split("|")
     client.channels.get("682935788605931532").send(hent[0] + " отхентаил(а) " + hent[1], { files: ["./images/hentai/" + hentaiNumber + ".gif"]} )
     .catch(console.error)

}

}); 



client.login(process.env.BOT_SECRET);
