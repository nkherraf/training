const { Collection } = require("discord.js");
const fs = require('fs');

var cmds = new Collection();

const cmdFiles = fs.readdirSync('./cmds');

cmdFiles.forEach((file) => {
    const command = require(`../cmds/${file}`);
    cmds.set(command.cmd.name,command);
})


module.exports = {
    name: 'interactionCreate',
    once: false,
    async do(inter) {
        if(inter.isCommand()) {
            var cmdName = inter.commandName;
            var cmd = cmds.get(cmdName);
            await cmd.exec(inter);
        }
    }
}