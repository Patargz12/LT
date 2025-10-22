function countRoutes(locations, start, finish, fuel) {
    const MOD = 1e9 + 7;
    const n = locations.length;
    const memo = new Map();
    
    function dp(city, remainingFuel) {
        const key = city * 1000 + remainingFuel;
        if (memo.has(key)) return memo.get(key);
        
        let routes = city === finish ? 1 : 0;
        
        for (let next = 0; next < n; next++) {
            if (next === city) continue;
            
            const cost = Math.abs(locations[city] - locations[next]);
            if (cost <= remainingFuel) {
                routes = (routes + dp(next, remainingFuel - cost)) % MOD;
            }
        }
        
        memo.set(key, routes);
        return routes;
    }
    
    return dp(start, fuel);
}