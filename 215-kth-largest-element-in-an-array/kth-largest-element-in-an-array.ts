function findKthLargest(nums: number[], k: number): number {
    const partition = (left: number, right: number): [number, number] => {
        const pivotIndex = left + Math.floor(Math.random() * (right - left + 1));
        const pivot = nums[pivotIndex];
        [nums[pivotIndex], nums[right]] = [nums[right], nums[pivotIndex]];
        
        let lt = left;
        let gt = right;
        let i = left;
        
        while (i <= gt) {
            if (nums[i] > pivot) {
                [nums[lt], nums[i]] = [nums[i], nums[lt]];
                lt++;
                i++;
            } else if (nums[i] < pivot) {
                [nums[i], nums[gt]] = [nums[gt], nums[i]];
                gt--;
            } else {
                i++;
            }
        }
        
        return [lt, gt];
    };
    
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        const [lt, gt] = partition(left, right);
        
        if (k - 1 < lt) {
            right = lt - 1;
        } else if (k - 1 > gt) {
            left = gt + 1;
        } else {
            return nums[k - 1];
        }
    }
    
    return nums[k - 1];
}