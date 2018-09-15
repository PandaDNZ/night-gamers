const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', msg => {
  if (msg.content === 'Cine e seful aici?') {
    msg.reply('Panda e seful!');
  }
});

var game = {name: "with code"}; // sets game as "Playing with code"
var streamingGame = {type: 1, name: "something", url: ""}; // "Streaming"
// note: streaming status requires a valid twitch url:
//       ex. "http://twitch.tv/channel"
client.User.setGame(game); // playing
client.User.setGame("with code"); // playing
client.User.setGame(streamingGame); // streaming
client.User.setGame(null); // not playing

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
