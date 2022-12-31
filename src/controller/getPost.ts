/*
코드기능: 포스트를 가져와서 localstorage에 저장하는 기능.
수정날짜: 2022-12-23
*/

import axios from "axios";
const getPost = () => {
    axios
        .get("/api/posts/read")
        .then((res) => {
            localStorage.setItem("post", JSON.stringify(res.data.reverse()));
        })
        .catch((err) => console.log(err));
};

export default getPost;
// export main.tsx
