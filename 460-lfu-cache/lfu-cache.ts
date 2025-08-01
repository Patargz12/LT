class LFUCache {
    private capacity: number;
    private keyToValue: Map<number, number>;
    private keyToFreq: Map<number, number>;
    private freqToKeys: Map<number, Set<number>>;
    private minFreq: number;

    constructor(capacity: number) {
        this.capacity = capacity;
        this.keyToValue = new Map();
        this.keyToFreq = new Map();
        this.freqToKeys = new Map();
        this.minFreq = 1;
    }
    
    get(key: number): number {
        if (!this.keyToValue.has(key)) return -1;
        
        this.updateFreq(key);
        return this.keyToValue.get(key);
    }
    
    put(key: number, value: number): void {
        if (this.capacity === 0) return;
        
        if (this.keyToValue.has(key)) {
            this.keyToValue.set(key, value);
            this.updateFreq(key);
            return;
        }
        
        if (this.keyToValue.size >= this.capacity) {
            this.evict();
        }
        
        this.keyToValue.set(key, value);
        this.keyToFreq.set(key, 1);
        
        if (!this.freqToKeys.has(1)) {
            this.freqToKeys.set(1, new Set());
        }
        this.freqToKeys.get(1).add(key);
        this.minFreq = 1;
    }
    
    private updateFreq(key: number): void {
        const freq = this.keyToFreq.get(key);
        
        this.freqToKeys.get(freq).delete(key);
        if (this.freqToKeys.get(freq).size === 0 && freq === this.minFreq) {
            this.minFreq++;
        }
        
        this.keyToFreq.set(key, freq + 1);
        
        if (!this.freqToKeys.has(freq + 1)) {
            this.freqToKeys.set(freq + 1, new Set());
        }
        this.freqToKeys.get(freq + 1).add(key);
    }
    
    private evict(): void {
        const keysWithMinFreq = this.freqToKeys.get(this.minFreq);
        const keyToEvict = keysWithMinFreq.values().next().value;
        
        keysWithMinFreq.delete(keyToEvict);
        this.keyToValue.delete(keyToEvict);
        this.keyToFreq.delete(keyToEvict);
    }
}