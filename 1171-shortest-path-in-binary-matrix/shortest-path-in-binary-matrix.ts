const shortestPathBinaryMatrix = (grid) => {
    const n = grid.length;
    
    if (grid[0][0] === 1 || grid[n-1][n-1] === 1) return -1;
    if (n === 1) return 1;
    
    const queue = [[0, 0, 1]];
    const visited = new Set();
    visited.add('0,0');
    
    const directions = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];
    
    while (queue.length) {
        const [row, col, dist] = queue.shift();
        
        for (const [dr, dc] of directions) {
            const newRow = row + dr;
            const newCol = col + dc;
            const key = `${newRow},${newCol}`;
            
            if (newRow >= 0 && newRow < n && newCol >= 0 && newCol < n && 
                grid[newRow][newCol] === 0 && !visited.has(key)) {
                
                if (newRow === n-1 && newCol === n-1) return dist + 1;
                
                queue.push([newRow, newCol, dist + 1]);
                visited.add(key);
            }
        }
    }
    
    return -1;
};