function wallsAndGates(rooms: number[][]): void {
    const m = rooms.length;
    const n = rooms[0].length;
    const queue: [number, number][] = [];
    const INF = 2147483647;
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (rooms[i][j] === 0) {
                queue.push([i, j]);
            }
        }
    }
    
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    
    while (queue.length > 0) {
        const [row, col] = queue.shift()!;
        
        for (const [dr, dc] of directions) {
            const newRow = row + dr;
            const newCol = col + dc;
            
            if (
                newRow >= 0 && 
                newRow < m && 
                newCol >= 0 && 
                newCol < n && 
                rooms[newRow][newCol] === INF
            ) {
                rooms[newRow][newCol] = rooms[row][col] + 1;
                queue.push([newRow, newCol]);
            }
        }
    }
}