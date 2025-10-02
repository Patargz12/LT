function repeatedStringMatch(a, b) {
    const minReps = Math.ceil(b.length / a.length);
    
    // Try minimum repetitions
    let repeated = a.repeat(minReps);
    if (repeated.includes(b)) return minReps;
    
    // Try one more repetition (for offset cases)
    repeated += a;
    if (repeated.includes(b)) return minReps + 1;
    
    return -1;
}