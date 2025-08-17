function minMutation(startGene, endGene, bank) {
    if (!bank.includes(endGene)) return -1;
    
    const bankSet = new Set(bank);
    const queue = [[startGene, 0]];
    const visited = new Set([startGene]);
    const chars = ['A', 'C', 'G', 'T'];
    
    while (queue.length > 0) {
        const [gene, mutations] = queue.shift();
        
        if (gene === endGene) return mutations;
        
        for (let i = 0; i < 8; i++) {
            for (const char of chars) {
                if (char === gene[i]) continue;
                
                const newGene = gene.slice(0, i) + char + gene.slice(i + 1);
                
                if (bankSet.has(newGene) && !visited.has(newGene)) {
                    visited.add(newGene);
                    queue.push([newGene, mutations + 1]);
                }
            }
        }
    }
    
    return -1;
}