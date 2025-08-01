function canIWin(maxChoosableInteger, desiredTotal) {
    if (maxChoosableInteger >= desiredTotal) return true;
    
    const sum = (maxChoosableInteger * (maxChoosableInteger + 1)) / 2;
    if (sum < desiredTotal) return false;
    
    const memo = new Map();
    
    function canWin(used, remaining) {
        if (memo.has(used)) return memo.get(used);
        
        for (let i = 1; i <= maxChoosableInteger; i++) {
            if (used & (1 << i)) continue;
            
            if (remaining <= i || !canWin(used | (1 << i), remaining - i)) {
                memo.set(used, true);
                return true;
            }
        }
        
        memo.set(used, false);
        return false;
    }
    
    return canWin(0, desiredTotal);
}