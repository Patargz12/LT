function canCross(stones) {
    const n = stones.length;
    const stoneSet = new Set(stones);
    const memo = new Map();
    
    function dp(index, lastJump) {
        if (index === n - 1) return true;
        
        const key = `${index},${lastJump}`;
        if (memo.has(key)) return memo.get(key);
        
        const currentPos = stones[index];
        
        for (let jump of [lastJump - 1, lastJump, lastJump + 1]) {
            if (jump > 0) {
                const nextPos = currentPos + jump;
                if (stoneSet.has(nextPos)) {
                    const nextIndex = stones.indexOf(nextPos);
                    if (dp(nextIndex, jump)) {
                        memo.set(key, true);
                        return true;
                    }
                }
            }
        }
        
        memo.set(key, false);
        return false;
    }
    
    return dp(0, 0);
}