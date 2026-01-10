function transpose(matrix: number[][]): number[][] {
    const m = matrix.length;
    const n = matrix[0].length;
    const result: number[][] = [];
    
    for (let col = 0; col < n; col++) {
        const row: number[] = [];
        for (let r = 0; r < m; r++) {
            row.push(matrix[r][col]);
        }
        result.push(row);
    }
    
    return result;
}

function transposeAlt(matrix: number[][]): number[][] {
    const m = matrix.length;
    const n = matrix[0].length;
    
    return Array.from({ length: n }, (_, col) =>
        Array.from({ length: m }, (_, row) => matrix[row][col])
    );
}