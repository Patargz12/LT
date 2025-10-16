class RangeModule {
    private intervals: number[][];
    
    constructor() {
        this.intervals = [];
    }
    
    addRange(left: number, right: number): void {
        const newIntervals: number[][] = [];
        let i = 0;
        
        // Add all intervals that end before the new interval starts
        while (i < this.intervals.length && this.intervals[i][1] < left) {
            newIntervals.push(this.intervals[i]);
            i++;
        }
        
        // Merge overlapping intervals
        let mergedLeft = left;
        let mergedRight = right;
        
        while (i < this.intervals.length && this.intervals[i][0] <= right) {
            mergedLeft = Math.min(mergedLeft, this.intervals[i][0]);
            mergedRight = Math.max(mergedRight, this.intervals[i][1]);
            i++;
        }
        
        newIntervals.push([mergedLeft, mergedRight]);
        
        // Add remaining intervals
        while (i < this.intervals.length) {
            newIntervals.push(this.intervals[i]);
            i++;
        }
        
        this.intervals = newIntervals;
    }
    
    queryRange(left: number, right: number): boolean {
        // Binary search for efficiency
        let low = 0;
        let high = this.intervals.length - 1;
        
        while (low <= high) {
            const mid = Math.floor((low + high) / 2);
            const [start, end] = this.intervals[mid];
            
            if (start <= left && right <= end) {
                return true;
            } else if (end < left) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        
        return false;
    }
    
    removeRange(left: number, right: number): void {
        const newIntervals: number[][] = [];
        
        for (const [start, end] of this.intervals) {
            if (end <= left || start >= right) {
                // No overlap
                newIntervals.push([start, end]);
            } else {
                // Overlap - split if needed
                if (start < left) {
                    newIntervals.push([start, left]);
                }
                if (right < end) {
                    newIntervals.push([right, end]);
                }
            }
        }
        
        this.intervals = newIntervals;
    }
}