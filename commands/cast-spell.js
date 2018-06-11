rand = require(`${__projdir}/util/rand.js`);
const spells = [
    ["Color Spray", "The stone on this Warlock's staff turns colors beyond what your eyes can comprehend. Oh. Actually he just painted over your face. Blinded one turn."],
    ["Guidance", "The Mysterious Magic Potato casts a grand spell; Glittering, shimmering auras abound. He points you in the direction of the bathroom."],
    ["Dancing lights", "Shimmering orbs dance before your eyes. Are-are they doing the macarena?"],
    ["Cheetah's Sprint", "The Potato Warlock Casts a flash of magic upon himself. He can now run at a normal pace."],
    ["Long Arm", "The magic Potato's arm's extend far beyond what they physically should to give you a pat on the head."]
]

module.exports = {
    'name': 'Cast spell',
    'description': 'Potato Warlock casts a spell!',
    'syntax': '$ dice(faces)',
    'parameters': { 'faces': 'the number of faces to roll for' },
    'test': /^ ?\$ ?(cast[- _]?)?spells? ?$/i,
    'function': (msg, bot) => {
        spell = spells[rand.randInt(0,spells.length - 1)]

        msg.channel.send({
            embed: {
              color: 0x231859,
              author: {
                name: msg.author.tag,
                icon_url: msg.author.avatarURL
              },
              thumbnail: {
                url: assets['pw.png']
              },
              title: `Potato Warlock casts ${spell[0]}`,
              description: spell[1],
            }
          });
    }
}