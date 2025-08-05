const totalHammingDistance = (nums) => {
    const n = nums.length;
    let total = 0;
    
    for (let bit = 0; bit < 32; bit++) {
        let ones = 0;
        
        for (const num of nums) {
            if ((num >> bit) & 1) {
                ones++;
            }
        }
        
        const zeros = n - ones;
        total += ones * zeros;
    }
    
    return total;
};