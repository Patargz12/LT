class MyHashMap {
  private buckets: Array<Array<[number, number]>>;
  private size: number;

  constructor() {
    this.size = 1000;
    this.buckets = Array.from({ length: this.size }, () => []);
  }

  private hash(key: number): number {
    return key % this.size;
  }

  put(key: number, value: number): void {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket[i][1] = value;
        return;
      }
    }
    
    bucket.push([key, value]);
  }

  get(key: number): number {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    
    for (const [k, v] of bucket) {
      if (k === key) return v;
    }
    
    return -1;
  }

  remove(key: number): void {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        return;
      }
    }
  }
}