class MyHashSet {
    private buckets: boolean[][];
    private bucketSize: number;
    
    constructor() {
        this.bucketSize = 1000;
        this.buckets = new Array(1001);
    }
    
    add(key: number): void {
        const bucketIdx = Math.floor(key / this.bucketSize);
        const pos = key % this.bucketSize;
        
        if (!this.buckets[bucketIdx]) {
            this.buckets[bucketIdx] = new Array(this.bucketSize).fill(false);
        }
        this.buckets[bucketIdx][pos] = true;
    }
    
    remove(key: number): void {
        const bucketIdx = Math.floor(key / this.bucketSize);
        const pos = key % this.bucketSize;
        
        if (this.buckets[bucketIdx]) {
            this.buckets[bucketIdx][pos] = false;
        }
    }
    
    contains(key: number): boolean {
        const bucketIdx = Math.floor(key / this.bucketSize);
        const pos = key % this.bucketSize;
        
        return this.buckets[bucketIdx] ? this.buckets[bucketIdx][pos] : false;
    }
}