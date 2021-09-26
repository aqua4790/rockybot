module.exports = (client, error, message, ...args) => {
    switch (error) {
        case 'NotPlaying':
            message.channel.send(`${client.emotes.error} - There is no music being played on this server !`);
            break;
        case 'NotConnected':
            message.channel.send(`${client.emotes.error} - You must be connected to the voice channel !`);
            break;
        case 'UnableToJoin':
            message.channel.send(`${client.emotes.error} - I don't have enough permissions !`);
            break;
        case 'VideoUnavailable':
            message.channel.send(`${client.emotes.error} - ${args[0].title} is not available in your country! Skipping...`);
            break;
        case 'MusicStarting':
            message.channel.send(`The music is starting... please chill and retry!`);
            break;
        default:
            message.channel.send(`${client.emotes.error} - It didn' work ;/ : ${error}`);
    };
};
