module.exports = {
    'name': 'ping',
    'description': 'A command to test servers response time',
    'syntax': '$ ping',
    'parameters': {'parameter name': 'parameter description'},
    'test': /^ ?\$ ?ping ?$/i,
    'function': (msg, bot) => {
        msg.reply('Pong!');
    }
}