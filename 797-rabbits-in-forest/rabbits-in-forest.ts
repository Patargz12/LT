function numRabbits(answers: number[]) : number {
    const freq = new Map<number, number>(); 

    for (const a of answers) {
        freq.set(a, (freq.get(a) ?? 0) + 1); 
    }

    let total = 0; 

    for ( const [x,c] of freq.entries()) {
        const groupSize = x + 1; 
        const groups = Math.ceil(c / groupSize); 
        total += groups * groupSize; 
    }

    return total 
}

console.log([1,1,2])