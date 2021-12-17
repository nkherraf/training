const { joinVoiceChannel, getVoiceConnection, createAudioPlayer, NoSubscriberBehavior, createAudioResource, AudioPlayerStatus } = require('@discordjs/voice');
const { createReadStream } = require('fs');
const ytdl = require("ytdl-core");

const queue = new Map();
const player = createAudioPlayer({
    behaviors: {
        noSubscriber: NoSubscriberBehavior.Stop,
    },
});

function joinVoice(message, vC) {
    var voiceChan = vC;
    if (voiceChan) {
        message.channel.send(`I'm coming for your ears <@${message.member.id}> !`).then(() => {
            const con = joinVoiceChannel({
                channelId: voiceChan.id,
                guildId: voiceChan.guild.id,
                adapterCreator: voiceChan.guild.voiceAdapterCreator
            })
            con.subscribe(player);
        });
        return;
    } else {
        message.channel.send(`<@${message.member.id}> you're not even in a voice channel... What do you want me to join ? The emptyness ?`);
        return;
    }
}


module.exports = {
    name: 'music',
    description: 'To play some music',
    do(msg, params) {
        var cmdType = params.shift();
        var voiceChannel = msg.member.voice.channel;
        var serverQueue = queue.get(msg.guild.id);
        switch (cmdType) {
            case '-play':
                if (!getVoiceConnection(msg.guild.id) || getVoiceConnection(msg.guild.id).joinConfig.channelId != msg.member.voice.channel.id) {
                    msg.reply('I prefer to join a Voice Channel before playing music >:(');
                    return;
                } else {
                    if (params.length > 0) {
                        let urlArg = params[0];

                        ytdl.getInfo(urlArg).then((songInfos) => {
                            var song = {
                                title: songInfos.videoDetails.title,
                                url: songInfos.videoDetails.video_url
                            }

                            if (serverQueue) {
                                serverQueue.songs.push(song);
                                msg.reply(`The song ${song.title} has been added to queue. But you'll have to here ${serverQueue.songs.length - 1} other songs before :P`)
                                return;
                            } else {
                                var queueConstruct = {
                                    textChannel: msg.channel,
                                    voiceChannel: voiceChannel,
                                    connection: getVoiceConnection(msg.guild.id),
                                    songs: [song],
                                    volume: 3,
                                    playing: true,
                                }
                                queue.set(msg.guild.id, queueConstruct);
                                serverQueue = queue.get(msg.guild.id);

                            }
                            serverQueue.connection.setSpeaking(true);
                            playSong(msg.guild, serverQueue);
                        })
                    } else {
                        msg.reply('I guess you forgot to tell me what song to play...')
                    }
                }
                break;

            case '-pause':
                if (player.state.status == 'playing') {
                    player.pause();
                    serverQueue.textChannel.send(`The music is paused`);
                } else {
                    msg.reply(`I'm not even playing a song ! Why you keep harrassing me n_n`)
                }
                break;

            case '-restart':
                if (player.state.status == 'paused') {
                    player.unpause();
                    serverQueue.textChannel.send(`The music is replaying ! Yiiiha !`);
                } else {
                    msg.reply(`I'm not even in pause ! Why you keep harrassing me n_n`)
                }
                break;

            case '-join':
                if(getVoiceConnection(msg.guild.id) && getVoiceConnection(msg.guild.id).joinConfig.channelId == msg.member.voice.channel.id) {
                    msg.reply('I\'m already here bro... ');
                } else {
                    joinVoice(msg, voiceChannel);
                }
                break;

            case '-end':
                if (getVoiceConnection(msg.guild.id)) {
                    msg.reply("Okay.. I'm out, have fun without me guys...")
                        .then(() => {
                            queue.delete(msg.guild.id)
                            player.stop();
                            getVoiceConnection(msg.guild.id).destroy();
                        })
                } else {
                    msg.reply('No voice connections were created');
                }
                break;

            default:
                msg.reply(`I guess you forgot something... like telling me what to do !`)
                break;
        }

    }
}

async function playSong(guild, servQ) {
    var song = servQ.songs[0];
    if (!song) {
        player.stop();
        servQ.connection.disconnect();
        queue.delete(guild.id);
        return;
    } else {
        var songToPlay = createAudioResource(ytdl(song.url, { filter: 'audioonly' }), { seek: 0, volume: 1 });
        player.play(songToPlay);
        player.on(AudioPlayerStatus.Idle, () => {
            servQ.songs.shift();
            playSong(guild, servQ);
        });
        servQ.textChannel.send(`Now playing __${song.title}__ ! Enjoy :)`);
    }
}