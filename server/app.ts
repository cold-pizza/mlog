const express = require("express");
const app = express();
const port = 3010;
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Rjqeprl@4579",
    database: "mlogDB",
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const db = connection.query(
    "select * from userList",
    (err, results, fields) => {
        const [rows] = results;
        console.log(rows);
        return rows;
    }
);
// console.log(db);
// const promisePool = pool.promise();

// const sql = {
//     getMlogdb: async () => {
//         const [rows] = await promisePool.query(`select * from userList`);
//         return rows;
//     },
// };

app.get("/api/userlist", (req, res) => {
    res.send(db._rows[0][0]);
});

app.listen(port, () => {
    console.log(`Connect at http://localhost:${port}!!!`);
});
