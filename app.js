global.__projdir = __dirname;
require('dotenv').config();
const express = require('express');
const app = express();
app.listen(process.env.PORT, () => {
    console.log(`Server on port ${process.env.PORT}`);
})
app.use('/assets', express.static('assets'));
const settings = require(`${__dirname}/config/settings.json`);
var HOST = settings.host;
const fs = require('fs');
let dirs = fs.readdirSync('./commands');
let commands = [];
for(i in dirs) {
    cmd = require(`${__dirname}/commands/${dirs[i]}`);
    console.log(`Installing module: ${dirs[i]}`);
    commands.push(
        {
            'name': cmd.name,                   // name:        Commands name
            'description': cmd.description,     // description: Commands brief description
            'syntax': cmd.command,              // syntax:      Formatting for the commands syntax (documentation)
            'parameters': cmd.parameters,       // parameters:  Parameters needed for the command (documentation)
            'test': cmd.test,                   // test:        Regex to test message string with
            'function': cmd.function            // function:    Function executed if message matches Regex
        }
    );
    console.log(`Installation success! module: ${dirs[i]}`);
}
delete dirs;
console.log('Building assets tree');
tree = JSON.stringify(require('./util/tree')(HOST, `${__dirname}/assets`));
fs.writeFileSync(`${__dirname}/util/assets.json`, tree);
global.assets = require(`${__dirname}/util/assets.json`);
console.log('Asset tree built successfully!');
require(`${__dirname}/bot.js`)(commands);