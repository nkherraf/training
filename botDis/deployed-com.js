const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId } = require('./config.json');
const code = require('./fcts/code');
const fs = require('fs');

let token = code.decode(code.keyCoded);

const commands = [];

const cmdFiles = fs.readdirSync('./cmds');

cmdFiles.forEach((file) => {
	// console.log(file);
	var cmd = require(`./cmds/${file}`);
	commands.push(cmd.cmd.toJSON());
})


const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);

