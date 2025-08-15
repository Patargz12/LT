const numDecodings = (s) => {
    const n = s.length;
    const dp = Array(n + 1).fill(0);
    dp[0] = 1;
    dp[1] = s[0] !== '0' ? 1 : 0;
    
    for (let i = 2; i <= n; i++) {
        const oneDigit = parseInt(s[i - 1]);
        const twoDigit = parseInt(s.substring(i - 2, i));
        
        if (oneDigit >= 1 && oneDigit <= 9) {
            dp[i] += dp[i - 1];
        }
        
        if (twoDigit >= 10 && twoDigit <= 26) {
            dp[i] += dp[i - 2];
        }
    }
    
    return dp[n];
};