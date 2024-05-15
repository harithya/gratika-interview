export const sortArray = (arr) => {
    let numArr = [];
    let stringArr = [];

    // memisahkan antara string dan number
    arr.map((val) => {
        if (typeof val === "number") {
            numArr.push(val);
        } else {
            stringArr.push(val);
        }
    })

    // melakukan sorting
    numArr = numArr.sort((a, b) => a - b);
    stringArr = stringArr.sort();

    return [...stringArr, ...numArr];

}
