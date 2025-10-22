function numDecodings(s) {
    const MOD = 1e9 + 7;
    const n = s.length;
    
    let dp1 = 1;
    let dp2 = s[0] === '*' ? 9 : s[0] === '0' ? 0 : 1;
    
    for (let i = 1; i < n; i++) {
        let current = 0;
        
        if (s[i] === '*') {
            current = (9 * dp2) % MOD;
        } else if (s[i] !== '0') {
            current = dp2;
        }
        
        if (s[i-1] === '1') {
            if (s[i] === '*') {
                current = (current + 9 * dp1) % MOD;
            } else {
                current = (current + dp1) % MOD;
            }
        } else if (s[i-1] === '2') {
            if (s[i] === '*') {
                current = (current + 6 * dp1) % MOD;
            } else if (s[i] <= '6') {
                current = (current + dp1) % MOD;
            }
        } else if (s[i-1] === '*') {
            if (s[i] === '*') {
                current = (current + 15 * dp1) % MOD;
            } else if (s[i] <= '6') {
                current = (current + 2 * dp1) % MOD;
            } else {
                current = (current + dp1) % MOD;
            }
        }
        
        dp1 = dp2;
        dp2 = current;
    }
    
    return dp2;
}