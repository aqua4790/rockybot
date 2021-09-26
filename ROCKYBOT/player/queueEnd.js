module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - The queue has ended :( `);
};