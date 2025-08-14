const maxProfit = (prices: number[], fee: number): number => {
    if (prices.length <= 1) return 0;
    
    let held = -prices[0];
    let sold = 0;
    
    for (let i = 1; i < prices.length; i++) {
        held = Math.max(held, sold - prices[i]);
        sold = Math.max(sold, held + prices[i] - fee);
    }
    
    return sold;
};