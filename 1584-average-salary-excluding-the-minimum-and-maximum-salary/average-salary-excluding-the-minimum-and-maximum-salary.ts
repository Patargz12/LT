function average(salary: number[]): number {
    let sum = 0;
    let min = Infinity;
    let max = -Infinity;
    
    for (const s of salary) {
        sum += s;
        min = Math.min(min, s);
        max = Math.max(max, s);
    }
    
    return (sum - min - max) / (salary.length - 2);
}