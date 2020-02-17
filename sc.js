const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();
let p = "tess!"
let id2 = '<@405258156063850497>'

const config = require('./config.json');
const size = config.colors;
const rainbow = new Array(size);
client.count = require("./count.json")

for (var i=0; i<size; i++) {
var red = sin_to_hex(i, 0 * Math.PI * 2/3);  
var blue = sin_to_hex(i, 1 * Math.PI * 2/3); 
var green = sin_to_hex(i, 2 * Math.PI * 2/3); 

rainbow[i] = '#'+ red + green + blue;
}

function sin_to_hex(i, phase) {
var sin = Math.sin(Math.PI / size * 2 * i + phase);
var int = Math.floor(sin * 127) + 128;
var hex = int.toString(16);

return hex.length === 1 ? '0'+hex : hex;
}

let place = 0;
const servers = config.servers;

function changeColor() {
for (let index = 0; index < servers.length; ++index) {
client.guilds.get(servers[index]).roles.find('name', config.roleName).setColor(rainbow[place])
    .catch(console.error);
 

if(place == (size - 1)){
place = 0;
}else{
place++;
}
}
}

function emoji (id) {
return client.emojis.get(id).toString();
} 

client.on('ready', () => {

if(config.speed < 10){console.log("The minimum speed is 60.000, if this gets abused your bot might get IP-banned"); process.exit(1);}
setInterval(changeColor, config.speed);

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
let reminder = new Reminder('9:15', () => {

client.fetchWebhook('620966467994779658', 'g-yVItRDXMdx1TkfhsGIU3f6WYUy8R-OsU6MDe82I4WqQsTnx4q8bG1R3ll27mdnHdAX').then(webhook => {
			webhook.send("@everyone, до мирового босса осталось 15 минут. Не огорчайте и не заставляйте падшую плакать, зайдите, пожалуйста" + emoji("583194072190156811"))
 });


});

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
	 
/*
client.on("messageDelete", (msg) => {	
  if (typeof msg.content !== 'undefined'){	
    let date = new Date(msg.timestamp);	
    if (typeof msg.attachments[0] !== 'undefined'){	
	console.log('Кинул в лс удаленное сообщение')	
      client.users.get("405258156063850497").send(`Удалено сообщение от ${msg.author.username}, написанное ${date.toUTCString()}: "${msg.content}". К сообщению было что-то прикреплено.`);	
    } else {	
      client.users.get("405258156063850497").send(`Удалено сообщение от ${msg.author.username}, написанное ${date.toUTCString()}: "${msg.content}".`);	
    };	
  } else {	
    client.users.get("405258156063850497").send("Удалено сообщение.");	
  };	
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

client.on('message', message => {
    if(message.content.startsWith(p + 'help')) {
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
      let sayschannel = client.channels.get("675043899944730635")
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
     hentaimember = message.author
     hentaidelay = message.content.slice (9)
     message.channel.send(hentaimember + " отхентаил(а) " + hentaidelay)
     
   }
    
    if(message.content.startsWith(p + "clear")) {
    delmsg = message.content.slice (11)
message.channel.bulkDelete(delmsg).then(() => {
  message.channel.send("Deleted" + delmsg + "messages.").then(msg => msg.delete(3000));
});

  }
     
}); 

client.login(process.env.BOT_SECRET);
