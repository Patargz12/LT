function findCheapestPrice(n: number, flights: number[][], src: number, dst: number, k: number): number {
    const prices = Array(n).fill(Infinity);
    prices[src] = 0;
    
    for (let i = 0; i <= k; i++) {
        const tempPrices = [...prices];
        
        for (const [from, to, price] of flights) {
            if (prices[from] !== Infinity) {
                tempPrices[to] = Math.min(tempPrices[to], prices[from] + price);
            }
        }
        
        prices.splice(0, n, ...tempPrices);
    }
    
    return prices[dst] === Infinity ? -1 : prices[dst];
}