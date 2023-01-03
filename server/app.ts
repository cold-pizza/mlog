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

app.post("/api/users/login", (req, res) => {
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
                        const user = result[0];
                        res.send({
                            email: user.email,
                            id: user.id,
                            nickName: user.nickName,
                            profileImg: user.profileImg,
                            mbti: user.mbti,
                        });
                        console.log("로그인 성공");
                    } else {
                        console.log("비밀번호가 다릅니다.");
                        res.send("비밀번호가 다릅니다.");
                    }
                } else console.log("없는 이메일 입니다.");
            }
        );
    }
});

app.post("/api/users/logout", (req, res) => {
    console.log(req.session);
    console.log("로그아웃 중입니다.");
    req.session.destroy((err) => {
        if (err) throw err;
        console.log(req.session);
        res.send("로그아웃 되었습니다.");
    });
});

app.post("/api/users/signup", (req, res) => {
    const { nickName, email, pw, tel, mbti, profileNum } = req.body;
    const idFront = email.split("@")[0];
    let idList = "";
    for (let i = 0; i < idFront.length; i++) {
        idList = idList + `${idFront.charCodeAt(i) * 78}`;
    }
    var sql = "INSERT INTO userList VALUES (?, ?, ?, ?, ?, ?, ?)";
    connection.query(
        sql,
        [idList, email, nickName, pw, tel, profileNum, mbti],
        (err, result) => {
            if (err) console.log(err);
            console.log(result);
            console.log("회원가입 성공");
            res.send("회원가입이 완료되었습니다.");
        }
    );
});

app.post("/api/posts/create", (req, res) => {
    const { postId, title, writer, days, contents, mbti } = req.body;
    var sql = "INSERT INTO post VALUES (?, ?, ?, ?, ?, ?, ?)";
    connection.query(
        sql,
        [postId, title, writer, days, contents, 0, mbti],
        (err, result) => {
            if (err) console.log(err);
            console.log(result);
            console.log("글이 발행되었습니다.");
            res.send("글이 발행되었습니다.");
        }
    );
});

app.get("/api/posts/read", (req, res) => {
    var sql = "SELECT title, writer, days, mbti, viewCount FROM post";
    connection.query(sql, (err, result) => {
        if (err) console.log(err);
        res.send(result);
    });
});

app.post("/api/posts-info/read", (req, res) => {
    const { apiKeyNickname, apiKeyDays } = req.body;
    var sql =
        "SELECT title, writer, days, contents, viewCount FROM post WHERE days = ? and writer = ?";
    connection.query(sql, [apiKeyDays, apiKeyNickname], (err, result) => {
        if (err) console.log(err);
        console.log(result);
        res.send(result[0]);
    });
});

app.post("/api/posts/view-count/update", (req, res) => {
    const { days, writer, viewCount } = req.body;
    var sql = "UPDATE post SET viewCount = ? WHERE writer = ? AND days = ?";
    connection.query(sql, [viewCount, writer, days], (err, result) => {
        if (err) console.log(err);
        res.send("조회수 증가");
    });
});

app.post("/api/mypost/read", (req, res) => {
    const { id } = req.body;
    var sql = "SELECT title, writer, days FROM post WHERE postId = ?";
    connection.query(sql, [id], (err, result) => {
        if (err) console.log(err);
        console.log(result);
        res.send(result);
    });
});

app.post("/api/myprofile-image/update", (req, res) => {
    const { i, nickName } = req.body;
    var sql = "UPDATE userList SET profileImg = ? WHERE nickName = ?";
    connection.query(sql, [i, nickName], (err, result) => {
        if (err) console.log(err);
        console.log(result.info);
        res.send("이미지가 변경되었습니다.");
    });
});

app.post("/api/myprofile/read", (req, res) => {
    const { id } = req.body;
    var sql =
        "SELECT id, email, profileImg, nickName FROM userList WHERE id = ?";
    connection.query(sql, [id], (err, result) => {
        if (err) console.log(err);
        console.log(result);
        res.send(result[0]);
    });
});

app.post("/api/posts-writer/update", (req, res) => {
    const { beforeNickname, nickName } = req.body;
    var sql = "UPDATE post SET writer = ? WHERE writer = ?";
    connection.query(sql, [nickName, beforeNickname], (err, result) => {
        if (err) console.log(err);
        console.log(result);
        res.send("포스트 작성자 수정 완료.");
    });
});

app.post("/api/myprofile-nickname/update", (req, res) => {
    const { id, nickName } = req.body;
    var sql = "UPDATE userList SET nickName = ? WHERE id = ?";
    connection.query(sql, [nickName, id], (err, result) => {
        if (err) console.log(err);
        console.log(result);
        res.send("닉네임이 변경되었습니다.");
    });
});

app.post("/api/posts/delete", (req, res) => {
    const { id, title } = req.body;
    var sql = "DELETE FROM post WHERE title = ? AND postId = ?";
    connection.query(sql, [title, id], (err, result) => {
        if (err) console.log(err);
        console.log(result);
        res.send("게시물이 삭제되었습니다.");
    });
});

app.post("/api/posts/update", (req, res) => {
    const { title, beforeTitle, contents, id } = req.body;
    var sql =
        "UPDATE post SET title = ?, contents = ? WHERE title = ? AND postId = ?";
    connection.query(sql, [title, contents, beforeTitle, id], (err, result) => {
        if (err) console.log(err);
        console.log(result);
        res.send("게시물이 수정되었습니다.");
    });
});

app.listen(port, () => {
    console.log(`Connect at http://localhost:${port}!!!`);
});
