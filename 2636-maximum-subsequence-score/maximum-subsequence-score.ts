function maxScore(nums1: number[], nums2: number[], k: number): number {
    const n = nums1.length;
    
    const pairs: [number, number][] = [];
    for (let i = 0; i < n; i++) {
        pairs.push([nums1[i], nums2[i]]);
    }
    pairs.sort((a, b) => b[1] - a[1]);
    
    const heap: number[] = [];
    let sum = 0;
    let maxScore = 0;
    
    for (const [val1, val2] of pairs) {
        heapPush(heap, val1);
        sum += val1;
        
        if (heap.length > k) {
            sum -= heapPop(heap);
        }
        
        if (heap.length === k) {
            maxScore = Math.max(maxScore, sum * val2);
        }
    }
    
    return maxScore;
}

function heapPush(heap: number[], val: number): void {
    heap.push(val);
    let i = heap.length - 1;
    
    while (i > 0) {
        const parent = Math.floor((i - 1) / 2);
        if (heap[parent] <= heap[i]) break;
        
        [heap[parent], heap[i]] = [heap[i], heap[parent]];
        i = parent;
    }
}

function heapPop(heap: number[]): number {
    const min = heap[0];
    const last = heap.pop()!;
    
    if (heap.length > 0) {
        heap[0] = last;
        let i = 0;
        
        while (true) {
            const left = 2 * i + 1;
            const right = 2 * i + 2;
            let smallest = i;
            
            if (left < heap.length && heap[left] < heap[smallest]) {
                smallest = left;
            }
            if (right < heap.length && heap[right] < heap[smallest]) {
                smallest = right;
            }
            
            if (smallest === i) break;
            
            [heap[i], heap[smallest]] = [heap[smallest], heap[i]];
            i = smallest;
        }
    }
    
    return min;
}