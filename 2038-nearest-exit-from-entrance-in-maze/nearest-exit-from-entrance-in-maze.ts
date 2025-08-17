function nearestExit(maze, entrance) {
    const m = maze.length;
    const n = maze[0].length;
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    
    const queue = [[entrance[0], entrance[1], 0]];
    const visited = new Set();
    visited.add(`${entrance[0]},${entrance[1]}`);
    
    while (queue.length > 0) {
        const [row, col, steps] = queue.shift();
        
        for (const [dr, dc] of directions) {
            const newRow = row + dr;
            const newCol = col + dc;
            const key = `${newRow},${newCol}`;
            
            if (newRow >= 0 && newRow < m && newCol >= 0 && newCol < n && 
                maze[newRow][newCol] === '.' && !visited.has(key)) {
                
                if ((newRow === 0 || newRow === m - 1 || newCol === 0 || newCol === n - 1)) {
                    return steps + 1;
                }
                
                visited.add(key);
                queue.push([newRow, newCol, steps + 1]);
            }
        }
    }
    
    return -1;
}