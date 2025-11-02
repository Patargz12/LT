function stringShift(s: string, shift: number[][]): string {
    let netShift = 0;
    
    for (const [direction, amount] of shift) {
        netShift += direction === 1 ? amount : -amount;
    }
    
    const len = s.length;
    netShift = ((netShift % len) + len) % len;
    
    return s.slice(len - netShift) + s.slice(0, len - netShift);
}