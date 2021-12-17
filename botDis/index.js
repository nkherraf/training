const code = require('./fcts/code');
const fs = require('fs');
const { Client, Intents } = require('discord.js');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS, "GUILD_MESSAGES", "GUILD_VOICE_STATES"] });

// When the client is ready, run this code (only once)

// INTERACTION

var eventFiles = fs.readdirSync('./events');

// eventFiles.forEach((file) => {
// 	var event = require(`./events/${file}`);
// 	if (event.once) {
// 		client.once(event.name, param => {
// 			event.do(param);
// 		});
// 	} else {
// 		client.on(event.name, param => {
// 			console.log('Message : ')
// 			event.do(param);
// 		});
// 	}
// })

eventFiles.forEach((file) => {
	var event = require(`./events/${file}`);
	if(event.once) {
		client.once(event.name, (...param) => {
			event.do(...param);
		});
	} else {
		client.on(event.name, (...param) => {
			event.do(...param);
		});
	}
})

// Login to Discord with your client's token

let token = code.decode(code.keyCoded);
client.login(token);





