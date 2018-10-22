const Discord = require('discord.js');
const client = new Discord.Client();

client.on("ready", () => {
    client.user.setGame("with my code");
});

client.on('message', msg => {
  if (msg.content === 'Cine e seful aici?') {
    msg.reply('Panda e seful!');
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
