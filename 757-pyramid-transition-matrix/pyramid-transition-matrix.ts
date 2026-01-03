function pyramidTransition(bottom: string, allowed: string[]): boolean {
    const map = new Map<string, string[]>();
    
    for (const pattern of allowed) {
        const key = pattern.slice(0, 2);
        const val = pattern[2];
        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key)!.push(val);
    }
    
    const dfs = (current: string): boolean => {
        if (current.length === 1) return true;
        
        const next: string[] = [];
        
        const buildNext = (index: number, built: string): boolean => {
            if (index === current.length - 1) {
                return dfs(built);
            }
            
            const key = current[index] + current[index + 1];
            const options = map.get(key);
            
            if (!options) return false;
            
            for (const option of options) {
                if (buildNext(index + 1, built + option)) {
                    return true;
                }
            }
            
            return false;
        };
        
        return buildNext(0, '');
    };
    
    return dfs(bottom);
}