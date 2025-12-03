function maxProfit(prices: number[], fee: number): number {
    let hold = -prices[0];
    let free = 0;
    
    for (let i = 1; i < prices.length; i++) {
        const newHold = Math.max(hold, free - prices[i]);
        const newFree = Math.max(free, hold + prices[i] - fee);
        hold = newHold;
        free = newFree;
    }
    
    return free;
}