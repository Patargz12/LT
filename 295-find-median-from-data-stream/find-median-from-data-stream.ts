function MedianFinder() {
    this.maxHeap = [];
    this.minHeap = [];
}

MedianFinder.prototype.maxHeapPush = function(val: number): void {
    this.maxHeap.push(val);
    let i = this.maxHeap.length - 1;
    while (i > 0) {
        const parent = Math.floor((i - 1) / 2);
        if (this.maxHeap[i] <= this.maxHeap[parent]) break;
        [this.maxHeap[i], this.maxHeap[parent]] = [this.maxHeap[parent], this.maxHeap[i]];
        i = parent;
    }
};

MedianFinder.prototype.maxHeapPop = function(): number {
    if (this.maxHeap.length === 1) return this.maxHeap.pop();
    const val = this.maxHeap[0];
    this.maxHeap[0] = this.maxHeap.pop();
    let i = 0;
    while (true) {
        const left = 2 * i + 1;
        const right = 2 * i + 2;
        let largest = i;
        if (left < this.maxHeap.length && this.maxHeap[left] > this.maxHeap[largest]) {
            largest = left;
        }
        if (right < this.maxHeap.length && this.maxHeap[right] > this.maxHeap[largest]) {
            largest = right;
        }
        if (largest === i) break;
        [this.maxHeap[i], this.maxHeap[largest]] = [this.maxHeap[largest], this.maxHeap[i]];
        i = largest;
    }
    return val;
};

MedianFinder.prototype.minHeapPush = function(val: number): void {
    this.minHeap.push(val);
    let i = this.minHeap.length - 1;
    while (i > 0) {
        const parent = Math.floor((i - 1) / 2);
        if (this.minHeap[i] >= this.minHeap[parent]) break;
        [this.minHeap[i], this.minHeap[parent]] = [this.minHeap[parent], this.minHeap[i]];
        i = parent;
    }
};

MedianFinder.prototype.minHeapPop = function(): number {
    if (this.minHeap.length === 1) return this.minHeap.pop();
    const val = this.minHeap[0];
    this.minHeap[0] = this.minHeap.pop();
    let i = 0;
    while (true) {
        const left = 2 * i + 1;
        const right = 2 * i + 2;
        let smallest = i;
        if (left < this.minHeap.length && this.minHeap[left] < this.minHeap[smallest]) {
            smallest = left;
        }
        if (right < this.minHeap.length && this.minHeap[right] < this.minHeap[smallest]) {
            smallest = right;
        }
        if (smallest === i) break;
        [this.minHeap[i], this.minHeap[smallest]] = [this.minHeap[smallest], this.minHeap[i]];
        i = smallest;
    }
    return val;
};

MedianFinder.prototype.addNum = function(num: number): void {
    if (this.maxHeap.length === 0 || num <= this.maxHeap[0]) {
        this.maxHeapPush(num);
    } else {
        this.minHeapPush(num);
    }

    if (this.maxHeap.length > this.minHeap.length + 1) {
        this.minHeapPush(this.maxHeapPop());
    } else if (this.minHeap.length > this.maxHeap.length) {
        this.maxHeapPush(this.minHeapPop());
    }
};

MedianFinder.prototype.findMedian = function(): number {
    if (this.maxHeap.length > this.minHeap.length) {
        return this.maxHeap[0];
    }
    return (this.maxHeap[0] + this.minHeap[0]) / 2;
};