module.exports = {
    name: 'guildMemberAdd',
    once: false,
    do(member) {
        member.createDM()
        .then((dm) => {
            dm.send('Welcome in the bot test server, where the bot (me) has full power MWAHAHAHA...');
        });
    }
}