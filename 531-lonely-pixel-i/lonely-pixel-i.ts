function findLonelyPixel(picture) {
    const m = picture.length;
    const n = picture[0].length;
    let count = 0;
    
    const rowCount = new Array(m).fill(0);
    const colCount = new Array(n).fill(0);
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (picture[i][j] === 'B') {
                rowCount[i]++;
                colCount[j]++;
            }
        }
    }
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (picture[i][j] === 'B' && rowCount[i] === 1 && colCount[j] === 1) {
                count++;
            }
        }
    }
    
    return count;
}