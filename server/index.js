const mysql = require('mysql2')
const express = require("express")
const cors = require('cors');
const app = express()

app.use(cors());

app.get('/api', (req, res) => {
    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "HiKaRu!4215",
        database: 'mydb'
    })
    connection.connect();
    connection.query('SELECT * FROM user', function (error, results, fields) {
        if (error) throw error;
        res.send(results)
        connection.end();
    })
})

app.listen(5000, () => { console.log("server started on port 5000") })
