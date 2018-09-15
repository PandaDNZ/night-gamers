const Discord = require('discord.js');
const client = new Discord.Client();

client.on('!ready', () => {
    bot.user.setStatus("dnd")
    bot.user.setGame("PandaRO Seful meu!")
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
