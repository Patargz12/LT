function bestTeamScore(scores: number[], ages: number[]): number {
    const n = scores.length;
    const players: [number, number][] = [];
    
    for (let i = 0; i < n; i++) {
        players.push([ages[i], scores[i]]);
    }
    
    players.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);
    
    const dp: number[] = Array(n).fill(0);
    let maxScore = 0;
    
    for (let i = 0; i < n; i++) {
        dp[i] = players[i][1];
        
        for (let j = 0; j < i; j++) {
            if (players[j][1] <= players[i][1]) {
                dp[i] = Math.max(dp[i], dp[j] + players[i][1]);
            }
        }
        
        maxScore = Math.max(maxScore, dp[i]);
    }
    
    return maxScore;
}