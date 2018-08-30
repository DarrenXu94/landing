var sqlite3 = require('sqlite3').verbose();
var fs = require('fs');

var join = require("path").join;
var homedir = process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];

const CHROME_DB_LOCATION = expandHomeDir('~/.config/google-chrome/Default/History')

function expandHomeDir(path) {
    if (!path) return path;
    if (path == '~') return homedir;
    if (path.slice(0, 2) != '~/') return path;
    return join(homedir, path.slice(2));
}

function copyDBLocally(){
    const DEST = '/tmp/chromeDB'
    fs.copyFileSync(CHROME_DB_LOCATION, DEST);
    return DEST
}


function getAllHistory() {
    return new Promise((res, rej) => {
        // var db = new sqlite3.Database(CHROME_DB_LOCATION)
        const DEST = copyDBLocally()
        var db = new sqlite3.Database(DEST)

        // Change this to sort by oldest first or something
        db.all("SELECT * FROM urls WHERE 1 ORDER BY id DESC LIMIT 10;", function (err, rows) {
            db.close();
            res(rows)
        });
    }
    )
}

module.exports = getAllHistory;
