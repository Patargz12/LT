class MapSum {
    private map: Map<string, number>;
    
    constructor() {
        this.map = new Map();
    }
    
    insert(key: string, val: number): void {
        this.map.set(key, val);
    }
    
    sum(prefix: string): number {
        let total = 0;
        
        for (const [key, val] of this.map) {
            if (key.startsWith(prefix)) {
                total += val;
            }
        }
        
        return total;
    }
}