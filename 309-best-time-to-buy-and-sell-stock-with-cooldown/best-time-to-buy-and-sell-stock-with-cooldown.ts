const maxProfit = (prices) => {
    if (prices.length <= 1) return 0;
    
    let held = -prices[0];
    let sold = 0;
    let rest = 0;
    
    for (let i = 1; i < prices.length; i++) {
        const prevHeld = held;
        const prevSold = sold;
        const prevRest = rest;
        
        held = Math.max(prevHeld, prevRest - prices[i]);
        sold = prevHeld + prices[i];
        rest = Math.max(prevRest, prevSold);
    }
    
    return Math.max(sold, rest);
};