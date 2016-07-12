var express = require('express');
var app = express();
var mysql = require('mysql');

var port = process.env.PORT || 8181; 

app.get('/', function(req, res) {
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "node_example"
    })

    con.query('SELECT * FROM user INNER JOIN user_role ON user.user_role_id = user_role.id', function(err, rows) {
        if(err) throw err;
        res.json(rows);
    })
})

app.listen(port);