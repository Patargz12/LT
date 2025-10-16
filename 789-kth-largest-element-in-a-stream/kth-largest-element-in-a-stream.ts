class KthLargest {
    private k: number;
    private heap: number[];
    
    constructor(k: number, nums: number[]) {
        this.k = k;
        this.heap = [];
        
        for (const num of nums) {
            this.add(num);
        }
    }
    
    add(val: number): number {
        this.heap.push(val);
        this.bubbleUp(this.heap.length - 1);
        
        if (this.heap.length > this.k) {
            this.heap[0] = this.heap[this.heap.length - 1];
            this.heap.pop();
            this.bubbleDown(0);
        }
        
        return this.heap[0];
    }
    
    private bubbleUp(idx: number): void {
        while (idx > 0) {
            const parentIdx = Math.floor((idx - 1) / 2);
            if (this.heap[idx] >= this.heap[parentIdx]) break;
            [this.heap[idx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[idx]];
            idx = parentIdx;
        }
    }
    
    private bubbleDown(idx: number): void {
        const len = this.heap.length;
        
        while (true) {
            let smallest = idx;
            const left = 2 * idx + 1;
            const right = 2 * idx + 2;
            
            if (left < len && this.heap[left] < this.heap[smallest]) {
                smallest = left;
            }
            if (right < len && this.heap[right] < this.heap[smallest]) {
                smallest = right;
            }
            
            if (smallest === idx) break;
            [this.heap[idx], this.heap[smallest]] = [this.heap[smallest], this.heap[idx]];
            idx = smallest;
        }
    }
}