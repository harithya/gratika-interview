export const sortText = (str) => {
    return str.replace(/\s/g, '')
        .split('')
        .sort((a, b) => {
            const lowerA = a.toLowerCase();
            const lowerB = b.toLowerCase();
            if (lowerA < lowerB) return -1;
            if (lowerA > lowerB) return 1;
            if (a < b) return -1;
            if (a > b) return 1;
            return 0;
        });
};

export const letterCount = (str) => {
    const sortedText = sortText(str);
    return sortedText.reduce((acc, char) => {
        acc[char] = (acc[char] || 0) + 1;
        return acc;
    }, {});
};

