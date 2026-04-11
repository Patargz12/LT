function reorganizeString(s: string): string {
    const freq: Record<string, number> = {};
    for (const c of s) {
        freq[c] = (freq[c] || 0) + 1;
    }
    

    let heap: [string, number][] = Object.entries(freq)
        .sort((a, b) => b[1] - a[1]);
    

    if (heap[0][1] > Math.ceil(s.length / 2)) return "";
    
    let result = "";
    
  
    while (heap.length >= 2) {
  
        let [char1, count1] = heap[0];
        let [char2, count2] = heap[1];

        result += char1;
        result += char2;
        
    
        count1 -= 1;
        count2 -= 1;
        
      
        heap = heap.slice(2);
        

        if (count1 > 0) heap.push([char1, count1]);
        if (count2 > 0) heap.push([char2, count2]);
        

        heap.sort((a, b) => b[1] - a[1]);
    }
    

    if (heap.length === 1) {
        result += heap[0][0];
    }
    
    return result;
}
