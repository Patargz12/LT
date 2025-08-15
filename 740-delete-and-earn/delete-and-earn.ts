const deleteAndEarn = (nums) => {
    const count = {};
    let maxNum = 0;
    
    for (const num of nums) {
        count[num] = (count[num] || 0) + num;
        maxNum = Math.max(maxNum, num);
    }
    
    let prev2 = 0;
    let prev1 = 0;
    
    for (let i = 1; i <= maxNum; i++) {
        const current = Math.max(prev1, prev2 + (count[i] || 0));
        prev2 = prev1;
        prev1 = current;
    }
    
    return prev1;
};