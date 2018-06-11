const fs = require('fs');

out = {};

function tree(prefix, startdir) {
    var obj = arguments[2] || {};
    var subpath = arguments[3] || "";
    var subdir = arguments[4] || "";
    var contents = fs.readdirSync(`${startdir}${subpath}`);
    for(i in contents) {
        subdir = contents[i];
        newsubpath = `${subpath}/${subdir}`
        item = `${startdir}${newsubpath}`;
        dirtype = fs.statSync(item);
        if(dirtype.isFile()) {
            obj[subdir] = `${prefix}${newsubpath}`;
        } else if(dirtype.isDirectory()) {
            obj[subdir] = tree(prefix, startdir, obj[subdir], newsubpath, subdir)
        }
    }
    return obj
}

module.exports = tree;