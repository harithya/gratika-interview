const text = "MasyaAllah";

const res = text.split('')
    .sort((a, b) => {
        if (a.toLowerCase() < b.toLowerCase()) return -1;
        if (a.toLowerCase() > b.toLowerCase()) return 1;
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    })
console.log(res);

console.log("a".localeCompare("B"));