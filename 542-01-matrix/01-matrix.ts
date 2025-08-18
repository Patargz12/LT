const updateMatrix = (mat) => {
    const m = mat.length;
    const n = mat[0].length;
    const result = Array(m).fill(null).map(() => Array(n).fill(Infinity));
    const queue = [];
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 0) {
                result[i][j] = 0;
                queue.push([i, j]);
            }
        }
    }
    
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    
    while (queue.length) {
        const [row, col] = queue.shift();
        
        for (const [dr, dc] of directions) {
            const newRow = row + dr;
            const newCol = col + dc;
            
            if (newRow >= 0 && newRow < m && newCol >= 0 && newCol < n) {
                const newDist = result[row][col] + 1;
                if (newDist < result[newRow][newCol]) {
                    result[newRow][newCol] = newDist;
                    queue.push([newRow, newCol]);
                }
            }
        }
    }
    
    return result;
};