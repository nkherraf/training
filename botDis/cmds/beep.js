const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    cmd: new SlashCommandBuilder()
        .setName('beep')
        .setDescription('Do the beep !')
        .addStringOption(opt =>
            opt.setName('way')
                .setDescription('How it responds')
                .setRequired(true)
                .addChoice('Reverse','Boop')
                .addChoice('Right', 'Beep')),
    exec(inter) {
        inter.reply(inter.options.getString('way'));
    }
}