function validWordSquare(words) {
    const n = words.length;
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < words[i].length; j++) {
            if (j >= n || i >= words[j].length) {
                return false;
            }
            if (words[i][j] !== words[j][i]) {
                return false;
            }
        }
    }
    
    return true;
}