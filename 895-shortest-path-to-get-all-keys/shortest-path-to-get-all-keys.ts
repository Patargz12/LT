const shortestPathAllKeys = (grid) => {
    const m = grid.length;
    const n = grid[0].length;
    let start = null;
    let totalKeys = 0;
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '@') {
                start = [i, j];
            } else if (grid[i][j] >= 'a' && grid[i][j] <= 'f') {
                totalKeys++;
            }
        }
    }
    
    const allKeys = (1 << totalKeys) - 1;
    const queue = [[start[0], start[1], 0, 0]];
    const visited = new Set();
    visited.add(`${start[0]},${start[1]},0`);
    
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    
    while (queue.length) {
        const [row, col, keys, steps] = queue.shift();
        
        if (keys === allKeys) return steps;
        
        for (const [dr, dc] of directions) {
            const newRow = row + dr;
            const newCol = col + dc;
            
            if (newRow < 0 || newRow >= m || newCol < 0 || newCol >= n || 
                grid[newRow][newCol] === '#') continue;
            
            const cell = grid[newRow][newCol];
            let newKeys = keys;
            
            if (cell >= 'a' && cell <= 'f') {
                newKeys |= (1 << (cell.charCodeAt(0) - 97));
            } else if (cell >= 'A' && cell <= 'F') {
                const lockBit = 1 << (cell.charCodeAt(0) - 65);
                if ((keys & lockBit) === 0) continue;
            }
            
            const state = `${newRow},${newCol},${newKeys}`;
            if (!visited.has(state)) {
                visited.add(state);
                queue.push([newRow, newCol, newKeys, steps + 1]);
            }
        }
    }
    
    return -1;
};