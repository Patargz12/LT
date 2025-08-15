const mincostTickets = (days, costs) => {
    const travelDays = new Set(days);
    const dp = Array(366).fill(0);
    
    for (let i = 1; i <= 365; i++) {
        if (!travelDays.has(i)) {
            dp[i] = dp[i - 1];
        } else {
            dp[i] = Math.min(
                dp[i - 1] + costs[0],
                dp[Math.max(0, i - 7)] + costs[1],
                dp[Math.max(0, i - 30)] + costs[2]
            );
        }
    }
    
    return dp[365];
};