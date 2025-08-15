const minCostClimbingStairs = (cost) => {
    let prev2 = 0;
    let prev1 = 0;
    
    for (let i = 0; i < cost.length; i++) {
        const current = cost[i] + Math.min(prev1, prev2);
        prev2 = prev1;
        prev1 = current;
    }
    
    return Math.min(prev1, prev2);
};