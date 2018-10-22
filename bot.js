const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "+";


client.on('ready', () => {
    client.user.setStatus('available')
    client.user.setPresence({
        game: {
            name: 'BGAME.RO - COMING SOON!',
            type: "STREAMING",
            url: "https://www.twitch.tv/pandadnz"
        }
    });
});

client.on('message', msg => {
    if (!message.content.startsWith(prefix)) return;
  if (message.content.startsWith(prefix + "Cine e seful aici?")) {
    message.channel.send("@ャραиđ∂ℜǾツ#0001 ");
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
