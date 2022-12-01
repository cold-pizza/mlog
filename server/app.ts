const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const port = process.env.REACT_APP_API_PORT;
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");
const session = require("express-session");
const memoryStore = require("memorystore")(session);

var connection = mysql.createConnection({
    host: process.env.REACT_APP_API_HOST,
    user: process.env.REACT_APP_API_USER,
    password: process.env.REACT_APP_API_PASSWORD,
    database: process.env.REACT_APP_API_DATABASE,
});

const sessionObj = {
    secret: process.env.REACT_APP_SESSIONOBJ_SECRET,
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

app.post("/api/user/login-form", (req, res) => {
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

app.post("/api/user/logout", (req, res) => {
    console.log(req.session);
    console.log("로그아웃 중입니다.");
    req.session.destroy((err) => {
        if (err) throw err;
        console.log(req.session);
        res.send("세션 삭제 - 로그아웃 되었습니다.");
    });
});

app.post("/api/user/signup-form", (req, res) => {
    const { nickName, email, pw, tel, profileNum } = req.body;
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

app.post("/api/post/publishing", (req, res) => {
    const { postId, title, writer, days, contents } = req.body;
    var sql = "INSERT INTO post VALUES (?, ?, ?, ?, ?, ?)";
    connection.query(
        sql,
        [postId, title, writer, days, contents, 0],
        (err, result) => {
            if (err) console.log(err);
            console.log(result);
            console.log("글이 발행되었습니다.");
            res.send("글이 발행되었습니다.");
        }
    );
});

app.get("/api/post", (req, res) => {
    var sql = "SELECT postId, title, writer, days FROM post";
    connection.query(sql, (err, result) => {
        if (err) console.log(err);
        // console.log(result);
        res.send(result);
    });
});

app.post("/api/post/contents", (req, res) => {
    const { apiKeyNickname, apiKeyDays } = req.body;
    var sql =
        "SELECT title, writer, days, contents FROM post WHERE days = ? and writer = ?";
    connection.query(sql, [apiKeyDays, apiKeyNickname], (err, result) => {
        if (err) console.log(err);
        console.log(result);
        // res.send(result);
        res.send(result[0]);
    });
});

app.listen(port, () => {
    console.log(`Connect at http://localhost:${port}!!!`);
});
