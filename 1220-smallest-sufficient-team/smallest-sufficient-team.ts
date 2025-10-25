var smallestSufficientTeam = function(req_skills, people) {
    const n = req_skills.length;
    const skillMap = new Map();
    
    for (let i = 0; i < n; i++) {
        skillMap.set(req_skills[i], i);
    }
    
    const peopleMasks = people.map(skills => {
        let mask = 0;
        for (const skill of skills) {
            if (skillMap.has(skill)) {
                mask |= (1 << skillMap.get(skill));
            }
        }
        return mask;
    });
    
    const target = (1 << n) - 1;
    const dp = Array(1 << n).fill(null);
    dp[0] = [];
    
    for (let i = 0; i < people.length; i++) {
        const personMask = peopleMasks[i];
        if (personMask === 0) continue;
        
        for (let mask = 0; mask < (1 << n); mask++) {
            if (dp[mask] === null) continue;
            
            const newMask = mask | personMask;
            
            if (dp[newMask] === null || dp[newMask].length > dp[mask].length + 1) {
                dp[newMask] = [...dp[mask], i];
            }
        }
    }
    
    return dp[target];
};