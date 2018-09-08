
const sysinfo = require('systeminformation');
const shell = require('shelljs');

async function getAllStats() {
    //await get_cpu_details();
    return await get_disk_details();
}

async function get_cpu_details() {
    console.log("getting cpu information");
    try {
        const cpu_data = await sysinfo.cpu();
        return cpu_data;
    } catch (e) {
        console.log(e);
    }
}

async function get_disk_details() {
    console.log("getting disk information");
    try {
        raw_data = await shell.exec('df -h / | tail -n 1', {silent: true});

        parse_data = await raw_data.stdout.split('   ');

        return parse_disk_details(parse_data);

    } catch (e) {
        console.log(e)
    }
}

async function parse_disk_details(data) {
    return {
            "Filesystem": data[0],
            "Total_Size": data[1],
            "Used": data[2],
            "Available": data[3].split(' ')[0]
        }
}

module.exports = getAllStats;
