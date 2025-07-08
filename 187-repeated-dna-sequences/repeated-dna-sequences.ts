const findRepeatedDnaSequences = (s) => {
    if (s.length < 10) return [];
    
    const counts = new Map();
    const result = [];
    
    for (let i = 0; i <= s.length - 10; i++) {
        const sequence = s.substr(i, 10);
        counts.set(sequence, (counts.get(sequence) || 0) + 1);
        
        if (counts.get(sequence) === 2) {
            result.push(sequence);
        }
    }
    
    return result;
};