
module.exports = {
    name: 'ready',
    once: true,
    async do(client) {
        client.user.setActivity('your actions...',{type: 'WATCHING'});
        console.log('Ready to go !')
    }
}