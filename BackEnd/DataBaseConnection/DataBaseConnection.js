const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'YourRootPassword',
    database: 'masonry_project_db'
});

con.connect(function(err){
    console.log("Connecting...");
    if(err) throw err;
    console.log("Connected!");

    con.query('select * from project', function (err, result){
        if(err) throw err;
        console.log(result);
    });
});
