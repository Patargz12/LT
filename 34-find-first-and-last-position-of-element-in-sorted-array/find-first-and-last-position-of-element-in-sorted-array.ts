function searchRange(nums: number[], target: number): number[] {
    const findFirst = (nums: number[], target: number): number => {
        let left = 0;
        let right = nums.length - 1;
        let result = -1;
        
        while (left <= right) {
            const mid = Math.floor(left + (right - left) / 2);
            
            if (nums[mid] === target) {
                result = mid;
                right = mid - 1; // Continue searching left
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        return result;
    };
    
    const findLast = (nums: number[], target: number): number => {
        let left = 0;
        let right = nums.length - 1;
        let result = -1;
        
        while (left <= right) {
            const mid = Math.floor(left + (right - left) / 2);
            
            if (nums[mid] === target) {
                result = mid;
                left = mid + 1; // Continue searching right
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        return result;
    };
    
    if (nums.length === 0) {
        return [-1, -1];
    }
    
    const first = findFirst(nums, target);
    if (first === -1) {
        return [-1, -1];
    }
    
    const last = findLast(nums, target);
    return [first, last];
}