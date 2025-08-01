function fourSumCount(nums1, nums2, nums3, nums4) {
    const map = new Map();
    
    for (const a of nums1) {
        for (const b of nums2) {
            const sum = a + b;
            map.set(sum, (map.get(sum) || 0) + 1);
        }
    }
    
    let count = 0;
    for (const c of nums3) {
        for (const d of nums4) {
            const target = -(c + d);
            count += map.get(target) || 0;
        }
    }
    
    return count;
}