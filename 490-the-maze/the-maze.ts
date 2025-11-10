function hasPath(maze: number[][], start: number[], destination: number[]): boolean {
    const m = maze.length;
    const n = maze[0].length;
    const visited = new Set<string>();
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    
    const dfs = (row: number, col: number): boolean => {
        if (row === destination[0] && col === destination[1]) {
            return true;
        }
        
        const key = `${row},${col}`;
        if (visited.has(key)) {
            return false;
        }
        visited.add(key);
        
        for (const [dr, dc] of directions) {
            let newRow = row;
            let newCol = col;
            
            while (
                newRow + dr >= 0 && 
                newRow + dr < m && 
                newCol + dc >= 0 && 
                newCol + dc < n && 
                maze[newRow + dr][newCol + dc] === 0
            ) {
                newRow += dr;
                newCol += dc;
            }
            
            if (dfs(newRow, newCol)) {
                return true;
            }
        }
        
        return false;
    };
    
    return dfs(start[0], start[1]);
}