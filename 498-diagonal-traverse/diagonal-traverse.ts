const findDiagonalOrder = (mat) => {
    const m = mat.length;
    const n = mat[0].length;
    const result = [];
    
    for (let d = 0; d < m + n - 1; d++) {
        const diagonal = [];
        
        for (let i = 0; i < m; i++) {
            const j = d - i;
            if (j >= 0 && j < n) {
                diagonal.push(mat[i][j]);
            }
        }
        
        if (d % 2 === 0) {
            diagonal.reverse();
        }
        
        result.push(...diagonal);
    }
    
    return result;
};