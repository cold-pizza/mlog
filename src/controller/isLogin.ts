/*
코드기능: 로그인 되어 있는지 확인하는 기능.
수정날짜: 2022-12-17
*/

const isLogin = () => {
    if (localStorage.user) return true;
    else return false;
};

export default isLogin;
