class Solution {
    private m: number;
    private mapping: Map<number, number>;
    
    constructor(n: number, blacklist: number[]) {
        this.m = n - blacklist.length;
        this.mapping = new Map();
        
        // Mark all blacklisted numbers
        const blackSet = new Set(blacklist);
        
        // Find valid numbers in range [m, n-1]
        let last = n - 1;
        
        // Map blacklisted numbers in [0, m-1] to valid numbers in [m, n-1]
        for (const b of blacklist) {
            if (b < this.m) {
                // Find next valid number from the end
                while (blackSet.has(last)) {
                    last--;
                }
                this.mapping.set(b, last);
                last--;
            }
        }
    }
    
    pick(): number {
        const rand = Math.floor(Math.random() * this.m);
        return this.mapping.has(rand) ? this.mapping.get(rand) : rand;
    }
}