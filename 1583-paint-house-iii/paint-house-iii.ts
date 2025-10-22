function minCost(houses, cost, m, n, target) {
    const memo = new Map();
    const INF = 1e9;
    
    function dp(i, prevColor, neighborhoods) {
        if (neighborhoods > target) return INF;
        if (i === m) return neighborhoods === target ? 0 : INF;
        
        const key = `${i},${prevColor},${neighborhoods}`;
        if (memo.has(key)) return memo.get(key);
        
        let minCost = INF;
        
        if (houses[i] !== 0) {
            const newNeighborhoods = neighborhoods + (houses[i] !== prevColor ? 1 : 0);
            minCost = dp(i + 1, houses[i], newNeighborhoods);
        } else {
            for (let color = 1; color <= n; color++) {
                const newNeighborhoods = neighborhoods + (color !== prevColor ? 1 : 0);
                const paintCost = cost[i][color - 1] + dp(i + 1, color, newNeighborhoods);
                minCost = Math.min(minCost, paintCost);
            }
        }
        
        memo.set(key, minCost);
        return minCost;
    }
    
    const result = dp(0, 0, 0);
    return result >= INF ? -1 : result;
}