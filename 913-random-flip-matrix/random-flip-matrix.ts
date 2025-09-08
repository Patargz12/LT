class Solution {
    m: number;
    n: number;
    total: number;
    available: number;
    map: Map<number, number>;
    
    constructor(m: number, n: number) {
        this.m = m;
        this.n = n;
        this.total = m * n;
        this.available = this.total;
        this.map = new Map<number, number>();
    }
    
    flip(): number[] {
        const randIdx: number = Math.floor(Math.random() * this.available);
        const actualIdx: number = this.map.get(randIdx) ?? randIdx;
        const lastIdx: number = this.available - 1;
        const lastValue: number = this.map.get(lastIdx) ?? lastIdx;
        
        this.map.set(randIdx, lastValue);
        this.available--;
        
        return [Math.floor(actualIdx / this.n), actualIdx % this.n];
    }
    
    reset(): void {
        this.available = this.total;
        this.map.clear();
    }
}