const eraseOverlapIntervals = intervals => {
    intervals.sort((a, b) => a[1] - b[1]);
    
    let count = 0;
    let lastEnd = intervals[0][1];
    
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] < lastEnd) {
            count++;
        } else {
            lastEnd = intervals[i][1];
        }
    }
    
    return count;
};