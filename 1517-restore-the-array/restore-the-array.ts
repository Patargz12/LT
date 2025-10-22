function numberOfArrays(s, k) {
    const n = s.length;
    const MOD = 1e9 + 7;
    const dp = new Array(n + 1).fill(0);
    
    // Base case: empty string has 1 way
    dp[n] = 1;
    
    // Fill dp from right to left
    for (let i = n - 1; i >= 0; i--) {
        // Skip if current digit is 0 (no leading zeros)
        if (s[i] === '0') continue;
        
        let num = 0;
        // Try all possible lengths starting from position i
        for (let j = i; j < n; j++) {
            num = num * 10 + parseInt(s[j]);
            
            // If number exceeds k, no point checking further
            if (num > k) break;
            
            // Add ways from position j+1
            dp[i] = (dp[i] + dp[j + 1]) % MOD;
        }
    }
    
    return dp[0];
}