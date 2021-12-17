const axios = require('axios');
const HTMLParser = require('node-html-parser');

module.exports = {
    name: 'google',
    description: 'Do a google Query',
    do(msg, params) {
        cmdType = params.shift();
        switch (cmdType) {
            case '-cat':
                axios.get("https://aws.random.cat/meow").then((res) => {
                    msg.reply(res.data.file);
                }).catch((err) => {
                    console.error(err);
                });
                break;
            case '-q':
                let firstPartQuery = 'https://www.google.com/search?q=';
                msg.reply(`Query :\n ${firstPartQuery + params.join('%20')}`);
                break;
            case '-img':
                var imgMax = 1;
                if(params.indexOf('-length')!=-1) {
                    let length = params.splice(params.indexOf('-length'));
                    length.shift()
                    imgMax = Number(length.join(''));
                }
                params.push('jpg');
                axios.get(`https://www.google.fr/search?q=${params.join('%20')}&tbm=isch`).then((resp) => {
                    var test = HTMLParser.parse(resp.data);
                    var baliseTab = test.querySelectorAll('img');
                    var createdEmbeds = [];
                    for (let i = 1; i < imgMax+1; i++) {
                        let urlFound = baliseTab[i].rawAttrs.split('"').filter(elem => elem.length >15)[0];
                        let embed = {
                            image: {
                                url: urlFound,
                            }
                        };
                        createdEmbeds.push(embed);
                    }
                    msg.reply({
                        content: 'The results of your request :',
                        embeds: createdEmbeds,
                    })

                    // msg.reply('The results :');
                    // for(let k=1;k<imgMax+1;k++) {
                    //     let urlFound = baliseTab[k].rawAttrs.split('"').filter(elem => elem.length >15)[0];
                    //     // imgTab.push(urlFound);

                    //     msg.channel.send(urlFound);
                    // }
                });
                break;
            default:
                msg.reply(`I don't recognize ${cmdType} as a correct argument for the google command.`);
                break;
        }
    }
}