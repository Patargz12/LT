const canReach = (arr, start) => {
    const visited = new Set();
    const queue = [start];
    
    while (queue.length > 0) {
        const i = queue.shift();
        
        if (arr[i] === 0) return true;
        
        if (visited.has(i)) continue;
        visited.add(i);
        
        const left = i - arr[i];
        const right = i + arr[i];
        
        if (left >= 0) queue.push(left);
        if (right < arr.length) queue.push(right);
    }
    
    return false;
};