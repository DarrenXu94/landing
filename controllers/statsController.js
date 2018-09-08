//var sqlite3 = require('sqlite3').verbose();
//var fs = require('fs');
const sysinfo = require('systeminformation');

function getAllStats() {
    return new Promise((res, rej) => {
        get_storage_details()
    }
    )
}

function get_storage_details() {
    console.log("getting disk informations");
    sysinfo.diskLayout(function (data) {
        console.log('Disk-Information:');
        console.log(data);
    });
}

module.exports = getAllStats;
