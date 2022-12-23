type FilterMbtiType = (mbti: string) => boolean;

const filterMbti: FilterMbtiType = function (mbti) {
    const mbtiList = "IENSTFJP";
    for (let i = 0; i < 4; i++) {
        const count = mbtiList.search(mbti[i]);
        if (count < 0) {
            return false;
        } else if (mbti[i - 1] === mbti[i]) {
            return false;
        } else console.log(count);
    }

    return true;
};
export default filterMbti;
// export signup.ts;
