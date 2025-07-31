const minMutation = (startGene, endGene, bank) => {
    if (startGene === endGene) return 0;
    
    const bankSet = new Set(bank);
    if (!bankSet.has(endGene)) return -1;
    
    const queue = [[startGene, 0]];
    const visited = new Set([startGene]);
    const chars = ['A', 'C', 'G', 'T'];
    
    while (queue.length > 0) {
        const [gene, mutations] = queue.shift();
        
        for (let i = 0; i < 8; i++) {
            for (const char of chars) {
                if (gene[i] === char) continue;
                
                const newGene = gene.slice(0, i) + char + gene.slice(i + 1);
                
                if (newGene === endGene) return mutations + 1;
                
                if (bankSet.has(newGene) && !visited.has(newGene)) {
                    visited.add(newGene);
                    queue.push([newGene, mutations + 1]);
                }
            }
        }
    }
    
    return -1;
};