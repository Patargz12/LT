var numberWays = function(hats) {
    const MOD = 1e9 + 7;
    const n = hats.length;
    const hatToPeople = Array.from({ length: 41 }, () => []);
    
    for (let i = 0; i < n; i++) {
        for (const hat of hats[i]) {
            hatToPeople[hat].push(i);
        }
    }
    
    const target = (1 << n) - 1;
    const dp = Array(41).fill(null).map(() => Array(1 << n).fill(0));
    dp[0][0] = 1;
    
    for (let hat = 1; hat <= 40; hat++) {
        for (let mask = 0; mask <= target; mask++) {
            dp[hat][mask] = dp[hat - 1][mask];
            
            for (const person of hatToPeople[hat]) {
                if ((mask & (1 << person)) !== 0) {
                    const prevMask = mask ^ (1 << person);
                    dp[hat][mask] = (dp[hat][mask] + dp[hat - 1][prevMask]) % MOD;
                }
            }
        }
    }
    
    return dp[40][target];
};