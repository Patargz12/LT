function minMeetingRooms(intervals) {
    if (intervals.length === 0) return 0;
    
    const starts = intervals.map(i => i[0]).sort((a, b) => a - b);
    const ends = intervals.map(i => i[1]).sort((a, b) => a - b);
    
    let rooms = 0;
    let endPtr = 0;
    
    for (let i = 0; i < starts.length; i++) {
        if (starts[i] >= ends[endPtr]) {
            endPtr++;
        } else {
            rooms++;
        }
    }
    
    return rooms;
}