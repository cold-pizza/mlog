import { IdEncryption } from "../types";
const idEncryption: IdEncryption = function (email) {
    const emailFront = email.split("@")[0];
    let idList = "";
    for (let i = 0; i < emailFront.length; i++) {
        idList = idList + `${emailFront.charCodeAt(i) * 78}`;
    }

    console.log(idList);
    return idList;
};

export default idEncryption;
