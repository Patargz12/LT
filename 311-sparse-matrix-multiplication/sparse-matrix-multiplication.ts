function multiply(mat1: number[][], mat2: number[][]): number[][] {
    const m = mat1.length;
    const k = mat1[0].length;
    const n = mat2[0].length;
    
    const result = Array(m).fill(0).map(() => Array(n).fill(0));
    
    for (let i = 0; i < m; i++) {
        for (let p = 0; p < k; p++) {
            if (mat1[i][p] === 0) continue;
            
            for (let j = 0; j < n; j++) {
                if (mat2[p][j] === 0) continue;
                
                result[i][j] += mat1[i][p] * mat2[p][j];
            }
        }
    }
    
    return result;
}