var minTransfers = function(transactions) {
    const balance = new Map();
    
    for (const [from, to, amount] of transactions) {
        balance.set(from, (balance.get(from) || 0) - amount);
        balance.set(to, (balance.get(to) || 0) + amount);
    }
    
    const debts = Array.from(balance.values()).filter(v => v !== 0);
    
    const backtrack = (index) => {
        while (index < debts.length && debts[index] === 0) {
            index++;
        }
        
        if (index === debts.length) return 0;
        
        let min = Infinity;
        
        for (let i = index + 1; i < debts.length; i++) {
            if (debts[index] * debts[i] < 0) {
                debts[i] += debts[index];
                min = Math.min(min, 1 + backtrack(index + 1));
                debts[i] -= debts[index];
            }
        }
        
        return min;
    };
    
    return backtrack(0);
};