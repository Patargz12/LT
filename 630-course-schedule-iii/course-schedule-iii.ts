function scheduleCourse(courses: number[][]): number {
    courses.sort((a, b) => a[1] - b[1]);
    
    const heap: number[] = [];
    let totalTime = 0;
    
    const heapifyUp = (idx: number) => {
        const parent = Math.floor((idx - 1) / 2);
        if (parent >= 0 && heap[parent] < heap[idx]) {
            [heap[parent], heap[idx]] = [heap[idx], heap[parent]];
            heapifyUp(parent);
        }
    };
    
    const heapifyDown = (idx: number) => {
        const left = 2 * idx + 1;
        const right = 2 * idx + 2;
        let largest = idx;
        
        if (left < heap.length && heap[left] > heap[largest]) largest = left;
        if (right < heap.length && heap[right] > heap[largest]) largest = right;
        
        if (largest !== idx) {
            [heap[idx], heap[largest]] = [heap[largest], heap[idx]];
            heapifyDown(largest);
        }
    };
    
    const push = (val: number) => {
        heap.push(val);
        heapifyUp(heap.length - 1);
    };
    
    const pop = (): number => {
        if (heap.length === 1) return heap.pop()!;
        const max = heap[0];
        heap[0] = heap.pop()!;
        heapifyDown(0);
        return max;
    };
    
    for (const [duration, deadline] of courses) {
        push(duration);
        totalTime += duration;
        
        if (totalTime > deadline) {
            const longest = pop();
            totalTime -= longest;
        }
    }
    
    return heap.length;
}