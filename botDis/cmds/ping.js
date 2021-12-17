const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    cmd: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Do the ping !')
        .addStringOption(option =>
            option.setName('way')
                .setDescription('The input to echo back')
                .setRequired(false)
                .addChoice('Reverse','Pong !')
                .addChoice('Right','/ping')),
    async exec(inter) {
        await inter.reply(inter.options.getString('way'));
    }
}