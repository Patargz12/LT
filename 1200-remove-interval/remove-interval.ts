function removeInterval(intervals, toBeRemoved) {
    const result = [];
    const [removeStart, removeEnd] = toBeRemoved;
    
    for (const [start, end] of intervals) {
        if (end <= removeStart || start >= removeEnd) {
            result.push([start, end]);
        } else {
            if (start < removeStart) {
                result.push([start, removeStart]);
            }
            if (end > removeEnd) {
                result.push([removeEnd, end]);
            }
        }
    }
    
    return result;
}