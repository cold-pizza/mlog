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
        secure: true,
    },
};

app.use(session(sessionObj));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// const userList = connection.query("select * from userList", (err, results) => {
//     if (err) {
//         // console.log("select userList error!");
//         throw err;
//     }
//     return results;
// });

// app.get("/api/userlist", (req, res) => {
//     res.send(userList._rows[0][0]);
// });

app.post("/api/login-form", (req, res) => {
    const { email, pw } = req.body;
    if (req.session.user?.email === email) {
        res.send("이미 로그인되어있습니다.");
    } else {
        connection.query(
            `select * from userList where email = ?`,
            [email],
            (err, result) => {
                if (err) console.log(err);
                if (result.length) {
                    if (result[0].pw === pw) {
                        req.session.user = result[0];
                        res.send(req.session.user);
                        // console.log(req.session);
                        console.log("------ 로그인 성공 -------");
                    } else {
                        console.log("비밀번호가 다릅니다.");
                        res.send("비밀번호가 다릅니다.");
                    }
                } else console.log("없는 이메일 입니다.");
            }
        );
    }
});

app.post("/api/logout", (req, res) => {
    console.log(req.session);
    console.log("로그아웃 중입니다.");
    req.session.destroy((err) => {
        if (err) throw err;
        // console.log("세션 삭제");
        console.log(req.session);
        res.send("세션 삭제 - 로그아웃 되었습니다.");
    });
});

app.post("/api/signup-form", (req, res) => {
    const { id, nickName, email, pw, tel, profileNum } = req.body;
    const idFront = email.split("@")[0];
    let idList = "";
    for (let i = 0; i < idFront.length; i++) {
        idList = idList + `${idFront.charCodeAt(i) * 78}`;
    }
    var sql = "INSERT INTO userList VALUES (?, ?, ?, ?, ?, ?)";
    connection.query(
        sql,
        [idList, email, nickName, pw, tel, profileNum],
        (err, result) => {
            if (err) console.log(err);
            console.log(result);
            console.log("⭐️⭐️⭐️⭐️⭐️ 회원가입 성공 ⭐️⭐️⭐️⭐️⭐️⭐️");
            res.send("회원가입이 완료되었습니다.");
        }
    );
});

app.listen(port, () => {
    console.log(`Connect at http://localhost:${port}!!!`);
});
