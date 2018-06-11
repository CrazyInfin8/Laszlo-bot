module.exports = {
    'name': '',
    'description': '',
    'syntax': '',
    'parameters': null,
    'test': /^ ?\$ ?ping ?$/i,
    'function': (msg, bot) => {
        msg.reply('Pong!');
    }
}