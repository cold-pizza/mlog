const express = require("express");
const app = express();
const port = 3010;
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");
const session = require("express-session");
const memoryStore = require("memorystore")(session);

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Rjqeprl@4579",
    database: "mlogDB",
});

const sessionObj = {
    secret: "aafjklwaFE@#@WLSSF1!ADF",
    resave: false,
    saveUninitialized: true,
    store: new memoryStore({ checkPeriod: 1000 * 60 * 10 }),
    cookie: {
        maxAge: 1000 * 60 * 10,
    },
};

app.use(session(sessionObj));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const userList = connection.query(
    "select * from userList",
    (err, results, fields) => {
        if (err) {
            console.log("select userList error!");
        }
        return results;
    }
);

app.get("/api/userlist", (req, res) => {
    res.send(userList._rows[0][0]);
});

app.post("/api/login-form", (req, res) => {
    const { email, pw } = req.body;
    connection.query(
        `select * from userList where email = ?`,
        [email],
        (err, result, fields) => {
            if (err) console.log(err);
            if (result.length) {
                if (result[0].pw === pw) {
                    req.session.user = result[0];
                    console.log(req.session);
                    req.session.save(function () {
                        res.redirect("/");
                    });
                    console.log("로그인 성공");
                } else console.log("비밀번호가 다릅니다.");
            } else console.log("없는 이메일 입니다.");
        }
    );
});

app.listen(port, () => {
    console.log(`Connect at http://localhost:${port}!!!`);
});
