const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();
var p = "tess!"
var id2 = '<@405258156063850497>'


client.on('ready', () => {
    client.user.setActivity('loading..',{ type: "PLAYING" })
    client.user.setStatus('dnd')
    setTimeout(status1, 6000)
    console.log('ready launched bot...')
});

function status1() {
client.user.setActivity("Dragon Nest Mobile", {
  type: "STREAMING",
  url: "https://www.twitch.tv/monstercat"
});
}


client.on('message', message => {
  if (message.content === (p + 'ping')) {
message.channel.send('Pinging...').then(sent => {
    sent.edit(`Pong! Took ${sent.createdTimestamp - message.createdTimestamp}ms`);
	console.log('Кто то узнал пинг бота!')
    });
  }
});



client.on('message', message => {
	if(message.content.startsWith(p + 'avatar')) {
try {
var mentions1 = message.mentions
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
	 
/*
client.on("messageDelete", (msg) => {	
  if (typeof msg.content !== 'undefined'){	
    var date = new Date(msg.timestamp);	
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
/*
client.on('message', message => {
         if(message.content.includes(id2)) {         
if(message.author.bot) return;
                       

client.users.get("405258156063850497").send(`${message.author.username} упомянул вас \n  Текст сообщения: ${message.content}`)



               
        }

    

 });
*/
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
    message.channel.send("Загрузка команд...");
function msdl() {
message.channel.bulkDelete(1)
}
setTimeout(msdl, 1000);

function ls() {
message.channel.send("Я отправил тебе список команд в личные сообщения")
}
setTimeout(ls, 1000);

function helpS() {  
        const embed = new Discord.RichEmbed()
            .setTitle("Помощь")
            .setColor("#00BFFF")
            .setDescription('Мои команды \n **tess!help** - команды бота \n **tess!afk on** - войти в AFK \n **tess!afk off** - выйти из AFK \n **tess!logo** - стырить лого сервера \n **tess!avatar** - стырить аву пользователя \n ***Этот список будет дополняться т.к автор ленивая жопа***')
            .setFooter("Tess bot")
            .setTimestamp();
    client.users.get(message.author.id).send({embed}).then(sentMessage => {   
            sentMessage.react('🇭')
                .then(() => sentMessage.react('🇪'))
                    .then(() => sentMessage.react('🇱'))
                    .then(() => sentMessage.react('🇵'))
                    .catch(() => console.error('ъуъ'));
           
        });
      }
setTimeout(helpS, 2000);
    }
});

client.on('message', function(message) {
    
    if(message.content === (p + "loop")) { 
setTimeout(int, 2000)

 }

function int() {           
console.log("start TIMER")          
setTimeout(int2, 5000)
}


function int2() {
client.users.get("405258156063850497").send("Checking Timer activated2")
setTimeout(int3, 5000)
}


function int3() {
client.users.get("405258156063850497").send("Checking Timer activated3")
setTimeout(int4, 5000)
}


function int4() {
client.users.get("405258156063850497").send("Checking Timer activated4")
setTimeout(int5, 5000)
}
//21600000(вернуть на места к функциям)

function int5() {
message.channel.send("@everyone, до мирового босса осталось 15 минут")
client.users.get("405258156063850497").send("Reload Timer")
setTimeout(int, 6000)
}
   
});




client.login(process.env.BOT_SECRET);
