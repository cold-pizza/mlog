const isLogin = () => {
    if (localStorage.user) return true;
    else return false;
};

export default isLogin;
