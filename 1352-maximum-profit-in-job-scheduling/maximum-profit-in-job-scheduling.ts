function jobScheduling(startTime: number[], endTime: number[], profit: number[]): number {
    const n = startTime.length;
    const jobs: [number, number, number][] = [];
    
    for (let i = 0; i < n; i++) {
        jobs.push([startTime[i], endTime[i], profit[i]]);
    }
    
    jobs.sort((a, b) => a[1] - b[1]);
    
    const dp = new Array(n).fill(0);
    dp[0] = jobs[0][2];
    
    for (let i = 1; i < n; i++) {
        let includeProfit = jobs[i][2];
        const latestNonOverlapping = findLatestNonOverlapping(i);
        
        if (latestNonOverlapping !== -1) {
            includeProfit += dp[latestNonOverlapping];
        }
        
        dp[i] = Math.max(dp[i - 1], includeProfit);
    }
    
    return dp[n - 1];
    
    function findLatestNonOverlapping(index: number): number {
        let left = 0;
        let right = index - 1;
        let result = -1;
        
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            
            if (jobs[mid][1] <= jobs[index][0]) {
                result = mid;
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        return result;
    }
}