function knightProbability(n: number, k: number, row: number, column: number): number {
    const moves = [[2, 1], [2, -1], [-2, 1], [-2, -1], [1, 2], [1, -2], [-1, 2], [-1, -2]];
    
    let dp: number[][] = Array.from({ length: n }, () => Array(n).fill(0));
    dp[row][column] = 1;
    
    for (let step = 0; step < k; step++) {
        const next: number[][] = Array.from({ length: n }, () => Array(n).fill(0));
        
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (dp[i][j] > 0) {
                    for (const [di, dj] of moves) {
                        const ni = i + di;
                        const nj = j + dj;
                        
                        if (ni >= 0 && ni < n && nj >= 0 && nj < n) {
                            next[ni][nj] += dp[i][j] / 8;
                        }
                    }
                }
            }
        }
        
        dp = next;
    }
    
    let total = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            total += dp[i][j];
        }
    }
    
    return total;
}