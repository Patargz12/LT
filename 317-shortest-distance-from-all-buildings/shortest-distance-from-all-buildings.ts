function shortestDistance(grid: number[][]): number {
    const m = grid.length;
    const n = grid[0].length;
    const buildings: [number, number][] = [];
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                buildings.push([i, j]);
            }
        }
    }
    
    const totalBuildings = buildings.length;
    const distances: number[][] = Array.from({ length: m }, () => Array(n).fill(0));
    const reachable: number[][] = Array.from({ length: m }, () => Array(n).fill(0));
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    
    for (const [startRow, startCol] of buildings) {
        const queue: [number, number, number][] = [[startRow, startCol, 0]];
        const visited = new Set<string>([`${startRow},${startCol}`]);
        
        while (queue.length > 0) {
            const [row, col, dist] = queue.shift()!;
            
            for (const [dr, dc] of directions) {
                const newRow = row + dr;
                const newCol = col + dc;
                const key = `${newRow},${newCol}`;
                
                if (
                    newRow >= 0 && 
                    newRow < m && 
                    newCol >= 0 && 
                    newCol < n && 
                    grid[newRow][newCol] === 0 && 
                    !visited.has(key)
                ) {
                    visited.add(key);
                    distances[newRow][newCol] += dist + 1;
                    reachable[newRow][newCol]++;
                    queue.push([newRow, newCol, dist + 1]);
                }
            }
        }
    }
    
    let minDistance = Infinity;
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 0 && reachable[i][j] === totalBuildings) {
                minDistance = Math.min(minDistance, distances[i][j]);
            }
        }
    }
    
    return minDistance === Infinity ? -1 : minDistance;
}