const Discord = require('discord.js');
const client = new Discord.Client();

client.on("ready", () => {
    client.user.setGame("with my code");
});

// NOTE: INTRODUCED IN VERSION 11.3 AND REPLACES setGame
client.on("ready", () => {
    client.user.setActivity({game: {name: "with my code", type: 0}});
});

client.on('message', msg => {
  if (msg.content === 'Cine e seful aici?') {
    msg.reply('Panda e seful!');
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
