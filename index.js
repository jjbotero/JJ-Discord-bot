const Discord = require('discord.js');
const prefix = require("./config.json");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {

  if (msg.content.startsWith(`${prefix}fonsi`)) {
    msg.channel.send('https://cdn.discordapp.com/attachments/591464241488461824/800631183734079538/FONSI.jpg');
  } else if (msg.content.startsWith(`${prefix}friday`)) {
    msg.channel.send('https://www.youtube.com/watch?v=kfVsfOSbJY0');
  }

});

client.login(process.env.token);