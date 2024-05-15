export const patternCount = (text, pattern) => {
    let match = 0;
    text.split('').forEach((item, index) => {
        // melakukan pengecekan pada huruf pertama
        if (item === pattern[0]) {
            let temp = text.slice(index, index + pattern.length);
            if (temp === pattern) {
                match++;
            }
        }
    })
    return match;
}
