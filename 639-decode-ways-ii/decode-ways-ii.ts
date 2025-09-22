function numDecodings(s: string): number {
    const MOD = 1000000007;
    const n = s.length;
    
    const ways1 = (char: string): number => {
        if (char === '*') return 9;
        if (char === '0') return 0;
        return 1;
    };
    
    const ways2 = (char1: string, char2: string): number => {
        if (char1 === '*' && char2 === '*') return 15;
        if (char1 === '*') {
            const num2 = parseInt(char2);
            return num2 <= 6 ? 2 : 1;
        }
        if (char2 === '*') {
            if (char1 === '1') return 9;
            if (char1 === '2') return 6;
            return 0;
        }
        const num = parseInt(char1 + char2);
        return num >= 10 && num <= 26 ? 1 : 0;
    };
    
    let prev2 = 1;
    let prev1 = ways1(s[0]);
    
    for (let i = 1; i < n; i++) {
        let curr = (ways1(s[i]) * prev1) % MOD;
        curr = (curr + ways2(s[i - 1], s[i]) * prev2) % MOD;
        
        prev2 = prev1;
        prev1 = curr;
    }
    
    return prev1;
}