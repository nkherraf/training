const { Collection } = require('discord.js');
const fs = require('fs');

var msgCommands = new Collection();
const msgCmdFiles = fs.readdirSync('./msgcmds').filter(file => file.endsWith('.js'));

msgCmdFiles.forEach((file) => {
    // console.log(file);
    const msgCmd = require(`../msgcmds/${file}`);
    msgCommands.set(msgCmd.name,msgCmd);
})

module.exports = {
    name: 'messageCreate',
    once: false,
    do(msg) {
        if(msg.content[0] == '$') {
            if(msg.channelId == '920289519813656586') {
                var params = msg.content.split(' ');
                var cmd = params.shift().split('');
                if(cmd.length > 1) {
                    cmd.shift();
                    let cmdName = cmd.join('');
                    const requiredCmd = msgCommands.get(cmdName);
                    if(requiredCmd) {
                        requiredCmd.do(msg,params);
                    } else {
                        msg.reply(`I can't find the command "${cmdName}", please try again :/`)
                    }
                } else {
                    msg.reply('I think you forgot something in your command-line... Maybe write the command right after the dollar !\nCome on bro, you always do that...')
                }
            } else {
                let chan = msg.channel;
                let auth = msg.author;
                chan.send(`Wrong channel <@${auth.id}>... Go here --> <#920289519813656586> to write "$" commands`);
                msg.delete();
            }
        }
    }
}