const Discord = require('discord.js');
const bot = new Discord.Client();
let commands = {};
module.exports = (cmd) => {
    commands = cmd;
}
bot.on('ready', () => {
    console.log('Ready for action! User: ' + bot.user.tag);
})

bot.on('message', (msg) => {
    for( i in commands ) {
        cmd = commands[i];
        if(cmd.test.test(msg.content)) {
            ret = cmd.function(msg, bot);
            if(typeof ret == 'string') {
                console.log(ret);
            }
            return;
        }
    }
})

bot.login(process.env.TOKEN);