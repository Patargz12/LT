const openLock = (deadends: string[], target: string): number => {
    const dead = new Set(deadends);
    if (dead.has("0000")) return -1;
    if (target === "0000") return 0;
    
    const visited = new Set<string>(["0000"]);
    const queue: [string, number][] = [["0000", 0]];
    
    const getNeighbors = (state: string): string[] => {
        const neighbors: string[] = [];
        const arr = state.split('');
        
        for (let i = 0; i < 4; i++) {
            const digit = parseInt(arr[i]);
            
            arr[i] = ((digit + 1) % 10).toString();
            neighbors.push(arr.join(''));
            
            arr[i] = ((digit - 1 + 10) % 10).toString();
            neighbors.push(arr.join(''));
            
            arr[i] = digit.toString();
        }
        
        return neighbors;
    };
    
    while (queue.length > 0) {
        const [state, steps] = queue.shift()!;
        
        for (const next of getNeighbors(state)) {
            if (next === target) return steps + 1;
            
            if (!visited.has(next) && !dead.has(next)) {
                visited.add(next);
                queue.push([next, steps + 1]);
            }
        }
    }
    
    return -1;
};