function minScore(grid: number[][]): number[][] {
    const m = grid.length;
    const n = grid[0].length;
    
    const positions: [number, number, number][] = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            positions.push([grid[i][j], i, j]);
        }
    }
    
    positions.sort((a, b) => a[0] - b[0]);
    
    const result = Array(m).fill(0).map(() => Array(n).fill(0));
    const rowMax = Array(m).fill(0);
    const colMax = Array(n).fill(0);
    
    for (let idx = 0; idx < positions.length; idx++) {
        const [val, i, j] = positions[idx];
        
        let minVal = Math.max(rowMax[i], colMax[j]) + 1;
        
        if (idx > 0 && positions[idx - 1][0] === val) {
            const [_, prevI, prevJ] = positions[idx - 1];
            if (prevI === i || prevJ === j) {
                minVal = Math.max(minVal, result[prevI][prevJ]);
            }
        }
        
        result[i][j] = minVal;
        rowMax[i] = minVal;
        colMax[j] = minVal;
    }
    
    return result;
}