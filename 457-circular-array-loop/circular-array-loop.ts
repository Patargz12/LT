function circularArrayLoop(nums) {
    const n = nums.length;
    
    for (let i = 0; i < n; i++) {
        if (nums[i] === 0) continue;
        
        let slow = i, fast = i;
        
        while (nums[fast] * nums[i] > 0 && nums[getNext(nums, fast)] * nums[i] > 0) {
            slow = getNext(nums, slow);
            fast = getNext(nums, getNext(nums, fast));
            
            if (slow === fast) {
                if (slow === getNext(nums, slow)) break;
                return true;
            }
        }
        
        let current = i;
        const direction = nums[i];
        while (nums[current] * direction > 0) {
            const next = getNext(nums, current);
            nums[current] = 0;
            current = next;
        }
    }
    
    return false;
}

function getNext(nums, i) {
    const n = nums.length;
    return ((i + nums[i]) % n + n) % n;
}