function rearrangeString(s, k) {
    if (k <= 1) return s;
    
    const freq = new Map();
    for (const char of s) {
        freq.set(char, (freq.get(char) || 0) + 1);
    }
    
    const heap = Array.from(freq.entries()).sort((a, b) => b[1] - a[1]);
    const result = [];
    const waiting = [];
    
    while (heap.length > 0 || waiting.length > 0) {
        if (waiting.length > 0 && result.length - waiting[0][2] >= k) {
            const [char, count] = waiting.shift();
            heap.push([char, count]);
            heap.sort((a, b) => b[1] - a[1]);
        }
        
        if (heap.length === 0) {
            return "";
        }
        
        const [char, count] = heap.shift();
        result.push(char);
        
        if (count > 1) {
            waiting.push([char, count - 1, result.length - 1]);
        }
    }
    
    return result.join('');
}