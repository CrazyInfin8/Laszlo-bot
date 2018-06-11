rand = require(`${__projdir}/util/rand.js`);

module.exports = {
    'name': 'dice',
    'description': 'Randomly generates a number from 1 to the number of faces (defaults to 6)',
    'syntax': '$ dice(faces)',
    'parameters': {'faces':'the number of faces to roll for'},
    'test': /^ ?\$ ?(?:roll[- _]?)?dice(?: ?\( ?\d+ ?\))? ?$/i,
    'function': (msg, bot) => {
        param1 = msg.content.match(/^ ?\$ ?(?:roll[- _]?)?dice(?: ?\( ?\d+ ?\))? ?$/i)[1]
        var title = "";
        title = "Potato Warlock rolls die";
        var body = "";
        if (!param1) {
            body = `Potato Warlock rolls a 6-sided die, fate has given you the number ${rand.randInt(1,6)}`;
            // return msg.reply(`using 6 sided die\nresults: ${rand.randInt(1,6)}`)
        } else {
            param1 = Number(param1);
            if(param1 < 3) {
                body = `Potato Warlock frowns upon your rediculous number and rolls a 6-sided die, fate has given you the number ${rand.randInt(1,6)}!`;
            } else {
                body = `Potato Warlock rolls a ${param1}-sided die, fate has given you the number ${rand.randInt(1,param1)}!`;
            }
        }
        msg.channel.send({
            embed:{
                color: 0x231859,
                author: {
                    name: msg.author.tag,
                    icon_url: msg.author.avatarURL
                },
                thumbnail: {
                    url: assets['pw.png']
                },
                title: title,
                description: body
            }
        })
    }
}