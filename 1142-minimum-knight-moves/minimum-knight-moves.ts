function minKnightMoves(x: number, y: number): number {
    x = Math.abs(x);
    y = Math.abs(y);
    
    const queue: [number, number, number][] = [[0, 0, 0]];
    const visited = new Set<string>(['0,0']);
    const directions = [
        [2, 1], [2, -1], [-2, 1], [-2, -1],
        [1, 2], [1, -2], [-1, 2], [-1, -2]
    ];
    
    while (queue.length > 0) {
        const [cx, cy, steps] = queue.shift()!;
        
        if (cx === x && cy === y) {
            return steps;
        }
        
        for (const [dx, dy] of directions) {
            const nx = cx + dx;
            const ny = cy + dy;
            const key = `${nx},${ny}`;
            
            if (!visited.has(key) && nx >= -2 && ny >= -2 && nx <= x + 2 && ny <= y + 2) {
                visited.add(key);
                queue.push([nx, ny, steps + 1]);
            }
        }
    }
    
    return -1;
}