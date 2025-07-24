const intersect = (nums1, nums2) => {
    const count = new Map();
    for (const num of nums1) {
        count.set(num, (count.get(num) || 0) + 1);
    }
    
    const result = [];
    for (const num of nums2) {
        if (count.get(num) > 0) {
            result.push(num);
            count.set(num, count.get(num) - 1);
        }
    }
    
    return result;
};