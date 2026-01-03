function intersectionSizeTwo(intervals: number[][]): number {
    intervals.sort((a, b) => a[1] !== b[1] ? a[1] - b[1] : b[0] - a[0]);
    
    let p1 = -1;
    let p2 = -1;
    let result = 0;
    
    for (const [start, end] of intervals) {
        if (start > p2) {
            p1 = end - 1;
            p2 = end;
            result += 2;
        } else if (start > p1) {
            p1 = p2;
            p2 = end;
            result += 1;
        }
    }
    
    return result;
}