function shortestWay(source: string, target: string): number {
    const sourceSet = new Set(source);
    
    for (const char of target) {
        if (!sourceSet.has(char)) return -1;
    }
    
    let count = 1;
    let sourceIdx = 0;
    
    for (const char of target) {
        const startIdx = sourceIdx;
        
        while (sourceIdx < source.length && source[sourceIdx] !== char) {
            sourceIdx++;
        }
        
        if (sourceIdx === source.length) {
            count++;
            sourceIdx = 0;
            
            while (source[sourceIdx] !== char) {
                sourceIdx++;
            }
        }
        
        sourceIdx++;
    }
    
    return count;
}