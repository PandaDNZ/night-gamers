const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
    client.user.setGame("created by PandaRO for NightGamers");
    client.user.setGame("Do Not Disturb");
});

client.on('message', msg => {
  if (msg.content === 'Cine e seful aici?') {
    msg.reply('Panda e seful!');
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
