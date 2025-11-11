function connectSticks(sticks) {
    const heap = [...sticks];
    
    const heapify = () => {
        for (let i = Math.floor(heap.length / 2) - 1; i >= 0; i--) {
            bubbleDown(i);
        }
    };
    
    const bubbleDown = (idx) => {
        while (true) {
            let minIdx = idx;
            const left = 2 * idx + 1;
            const right = 2 * idx + 2;
            
            if (left < heap.length && heap[left] < heap[minIdx]) {
                minIdx = left;
            }
            if (right < heap.length && heap[right] < heap[minIdx]) {
                minIdx = right;
            }
            if (minIdx === idx) break;
            
            [heap[idx], heap[minIdx]] = [heap[minIdx], heap[idx]];
            idx = minIdx;
        }
    };
    
    const bubbleUp = (idx) => {
        while (idx > 0) {
            const parentIdx = Math.floor((idx - 1) / 2);
            if (heap[idx] >= heap[parentIdx]) break;
            [heap[idx], heap[parentIdx]] = [heap[parentIdx], heap[idx]];
            idx = parentIdx;
        }
    };
    
    const pop = () => {
        if (heap.length === 1) return heap.pop();
        const min = heap[0];
        heap[0] = heap.pop();
        bubbleDown(0);
        return min;
    };
    
    const push = (val) => {
        heap.push(val);
        bubbleUp(heap.length - 1);
    };
    
    heapify();
    
    let cost = 0;
    
    while (heap.length > 1) {
        const first = pop();
        const second = pop();
        const combined = first + second;
        cost += combined;
        push(combined);
    }
    
    return cost;
}