function maximumWealth(accounts: number[][]): number {
    let maxWealth = 0;
    
    for (const account of accounts) {
        const wealth = account.reduce((sum, money) => sum + money, 0);
        maxWealth = Math.max(maxWealth, wealth);
    }
    
    return maxWealth;
}