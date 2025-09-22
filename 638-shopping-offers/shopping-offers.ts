function shoppingOffers(price: number[], special: number[][], needs: number[]): number {
    const memo = new Map<string, number>();
    
    const dfs = (currentNeeds: number[]): number => {
        const key = currentNeeds.join(',');
        if (memo.has(key)) return memo.get(key)!;
        
        let minCost = 0;
        for (let i = 0; i < currentNeeds.length; i++) {
            minCost += currentNeeds[i] * price[i];
        }
        
        for (const offer of special) {
            const newNeeds = [...currentNeeds];
            let canUse = true;
            
            for (let i = 0; i < currentNeeds.length; i++) {
                newNeeds[i] -= offer[i];
                if (newNeeds[i] < 0) {
                    canUse = false;
                    break;
                }
            }
            
            if (canUse) {
                const offerPrice = offer[offer.length - 1];
                minCost = Math.min(minCost, offerPrice + dfs(newNeeds));
            }
        }
        
        memo.set(key, minCost);
        return minCost;
    };
    
    return dfs(needs);
}