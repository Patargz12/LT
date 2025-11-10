function shortestDistance(maze: number[][], start: number[], destination: number[]): number {
    const m = maze.length;
    const n = maze[0].length;
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    
    const queue: [number, number, number][] = [[start[0], start[1], 0]];
    const distances = Array(m).fill(0).map(() => Array(n).fill(Infinity));
    distances[start[0]][start[1]] = 0;
    
    while (queue.length > 0) {
        const [x, y, dist] = queue.shift()!;
        
        if (dist > distances[x][y]) continue;
        
        for (const [dx, dy] of directions) {
            let nx = x;
            let ny = y;
            let steps = 0;
            
            while (nx + dx >= 0 && nx + dx < m && ny + dy >= 0 && ny + dy < n && maze[nx + dx][ny + dy] === 0) {
                nx += dx;
                ny += dy;
                steps++;
            }
            
            if (distances[x][y] + steps < distances[nx][ny]) {
                distances[nx][ny] = distances[x][y] + steps;
                queue.push([nx, ny, distances[nx][ny]]);
            }
        }
    }
    
    return distances[destination[0]][destination[1]] === Infinity ? -1 : distances[destination[0]][destination[1]];
}