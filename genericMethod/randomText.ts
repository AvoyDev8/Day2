

export function generateRandomString(sizes: number) {
    let myRandomString = "";
    for (let i: number = 0; i < sizes; i++) {
        const randomChar = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
        myRandomString += randomChar;
    }
    return myRandomString;
}

export function generateRandomNumber(sizes: number) {
    let result=0;
    for (let i: number = 0; i < sizes; i++) {
        const randomNum = Math.floor(Math.random() * 10);
        result = result*10 + randomNum;
    }
    return result;
}