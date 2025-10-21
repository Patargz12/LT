function findShortestWay(maze: number[][], ball: number[], hole: number[]): string {
    const m = maze.length;
    const n = maze[0].length;
    const directions: [number, number, string][] = [
        [-1, 0, 'u'],
        [1, 0, 'd'],
        [0, -1, 'l'],
        [0, 1, 'r']
    ];
    
    const pq: Array<[number, number, number, string]> = [[ball[0], ball[1], 0, '']];
    const visited = new Map<string, [number, string]>();
    visited.set(`${ball[0]},${ball[1]}`, [0, '']);
    
    while (pq.length > 0) {
        pq.sort((a, b) => {
            if (a[2] !== b[2]) return a[2] - b[2];
            return a[3].localeCompare(b[3]);
        });
        
        const [x, y, dist, path] = pq.shift()!;
        
        if (x === hole[0] && y === hole[1]) {
            return path;
        }
        
        for (const [dx, dy, dir] of directions) {
            let nx = x;
            let ny = y;
            let steps = 0;
            
            while (nx + dx >= 0 && nx + dx < m && 
                   ny + dy >= 0 && ny + dy < n && 
                   maze[nx + dx][ny + dy] === 0) {
                nx += dx;
                ny += dy;
                steps++;
                
                if (nx === hole[0] && ny === hole[1]) {
                    break;
                }
            }
            
            if (steps === 0) continue;
            
            const newDist = dist + steps;
            const newPath = path + dir;
            const key = `${nx},${ny}`;
            
            if (!visited.has(key) || 
                visited.get(key)![0] > newDist ||
                (visited.get(key)![0] === newDist && visited.get(key)![1] > newPath)) {
                visited.set(key, [newDist, newPath]);
                pq.push([nx, ny, newDist, newPath]);
            }
        }
    }
    
    return "impossible";
}