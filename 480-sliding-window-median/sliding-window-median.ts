class MedianFinder {
    nums: number[];
    
    constructor() {
        this.nums = [];
    }
    
    insert(num: number): void {
        let left = 0;
        let right = this.nums.length;
        
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (this.nums[mid] < num) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        
        this.nums.splice(left, 0, num);
    }
    
    remove(num: number): void {
        const index = this.nums.indexOf(num);
        if (index !== -1) {
            this.nums.splice(index, 1);
        }
    }
    
    getMedian(): number {
        const n = this.nums.length;
        if (n % 2 === 1) {
            return this.nums[Math.floor(n / 2)];
        } else {
            return (this.nums[n / 2 - 1] + this.nums[n / 2]) / 2;
        }
    }
}

const medianSlidingWindow = (nums: number[], k: number): number[] => {
    const result = [];
    const finder = new MedianFinder();
    
    for (let i = 0; i < k; i++) {
        finder.insert(nums[i]);
    }
    result.push(finder.getMedian());
    
    for (let i = k; i < nums.length; i++) {
        finder.remove(nums[i - k]);
        finder.insert(nums[i]);
        result.push(finder.getMedian());
    }
    
    return result;
};