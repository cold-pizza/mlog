type CreateMbtiPostType = (mbti: string) => void;
const createMbtiPost: CreateMbtiPostType = function (mbti) {
    let arr: {}[] = [];
    const postLen = JSON.parse(localStorage.post).length;
    for (let i = 0; i < postLen; i++) {
        const post = JSON.parse(localStorage.post)[i];
        const postMbti = JSON.parse(localStorage.post)[i].mbti;

        if (postMbti.search(mbti) > -1) {
            if (arr.length > 0) {
                arr = [...arr, post];
            } else {
                arr = [post];
            }
        }
    }
    localStorage.setItem("mbtiPost", JSON.stringify(arr));
};

export default createMbtiPost;
