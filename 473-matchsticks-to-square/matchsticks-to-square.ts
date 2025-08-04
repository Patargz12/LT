const makesquare = (matchsticks) => {
    const total = matchsticks.reduce((sum, stick) => sum + stick, 0);
    
    if (total % 4 !== 0) return false;
    
    const target = total / 4;
    matchsticks.sort((a, b) => b - a);
    
    if (matchsticks[0] > target) return false;
    
    const sides = [0, 0, 0, 0];
    
    const backtrack = (index) => {
        if (index === matchsticks.length) {
            return sides[0] === target && sides[1] === target && 
                   sides[2] === target && sides[3] === target;
        }
        
        const stick = matchsticks[index];
        
        for (let i = 0; i < 4; i++) {
            if (sides[i] + stick <= target) {
                sides[i] += stick;
                if (backtrack(index + 1)) return true;
                sides[i] -= stick;
            }
            
            if (sides[i] === 0) break;
        }
        
        return false;
    };
    
    return backtrack(0);
};