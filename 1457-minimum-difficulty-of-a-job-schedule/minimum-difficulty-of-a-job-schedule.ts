function minDifficulty(jobDifficulty, d) {
    const n = jobDifficulty.length;
    if (n < d) return -1;
    
    const memo = new Array(n).fill(null).map(() => new Array(d + 1).fill(-1));
    
    function dp(start, daysLeft) {
        if (daysLeft === 1) {
            return Math.max(...jobDifficulty.slice(start));
        }
        
        if (memo[start][daysLeft] !== -1) {
            return memo[start][daysLeft];
        }
        
        let minDiff = Infinity;
        let maxDiffToday = 0;
        
        for (let end = start; end <= n - daysLeft; end++) {
            maxDiffToday = Math.max(maxDiffToday, jobDifficulty[end]);
            const remainingDiff = dp(end + 1, daysLeft - 1);
            minDiff = Math.min(minDiff, maxDiffToday + remainingDiff);
        }
        
        memo[start][daysLeft] = minDiff;
        return minDiff;
    }
    
    return dp(0, d);
}