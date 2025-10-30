function employeeFreeTime(schedule: Interval[][]): Interval[] {
    const allIntervals: Interval[] = [];
    
    for (const employee of schedule) {
        for (const interval of employee) {
            allIntervals.push(interval);
        }
    }
    
    allIntervals.sort((a, b) => a.start - b.start);
    
    const merged: Interval[] = [];
    let current = allIntervals[0];
    
    for (let i = 1; i < allIntervals.length; i++) {
        if (current.end >= allIntervals[i].start) {
            current = new Interval(current.start, Math.max(current.end, allIntervals[i].end));
        } else {
            merged.push(current);
            current = allIntervals[i];
        }
    }
    merged.push(current);
    
    const result: Interval[] = [];
    for (let i = 0; i < merged.length - 1; i++) {
        result.push(new Interval(merged[i].end, merged[i + 1].start));
    }
    
    return result;
}