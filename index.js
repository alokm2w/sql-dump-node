// Include the dependency we need.
const { exec } = require('child_process');


// Where would the file be located?
let dumpFile = 'dump.sql';


// Database connection settings.
let exportFrom = {
    // host: '192.168.1.18',
    // user: 'root',
    // password: 'root',
    // database: 'servicePointsDB_09AUGUST2022_10_41AM',
    // port:3306

    // host: "db-ro-mysql-lon1-67532-do-user-10725348-0.b.db.ondigitalocean.com",
    // user: "doadmin",
    // password: "AVNS_KLcW7puY20Xg0T-",
    // database: "dropshipper_db",
    // port: 25060

    host: 'localhost',
    user: 'phpmyadmin',
    password: 'root',
    database: 'dropshipping'
}

console.log(`Starting exporting data from the ${exportFrom.database} database`);

// Execute a MySQL Dump and redirect the output to the file in dumpFile variable.
exec(`mysqldump -u${exportFrom.user} -p${exportFrom.password} -h${exportFrom.host} --compact ${exportFrom.database} > ${dumpFile}`, (err, stdout, stderr) => {
	if (err) { console.error(`exec error: ${err}`); return; }

    console.log(`The export has finished.`);
});