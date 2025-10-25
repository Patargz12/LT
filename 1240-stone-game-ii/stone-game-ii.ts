var stoneGameII = function(piles) {
    const n = piles.length;
    const suffixSum = Array(n + 1).fill(0);
    
    for (let i = n - 1; i >= 0; i--) {
        suffixSum[i] = suffixSum[i + 1] + piles[i];
    }
    
    const memo = Array.from({ length: n }, () => Array(n + 1).fill(0));
    
    const maxStones = (i, M) => {
        if (i >= n) return 0;
        if (i + 2 * M >= n) return suffixSum[i];
        
        if (memo[i][M] !== 0) return memo[i][M];
        
        let max = 0;
        for (let X = 1; X <= 2 * M; X++) {
            max = Math.max(max, suffixSum[i] - maxStones(i + X, Math.max(M, X)));
        }
        
        memo[i][M] = max;
        return max;
    };
    
    return maxStones(0, 1);
};