function getMaxRepetitions(s1, n1, s2, n2) {
    if (n1 === 0) return 0;
    
    const repeatCount = [];
    const nextIndex = [];
    let s1Count = 0, s2Count = 0, s2Index = 0;
    
    while (s1Count < n1) {
        s1Count++;
        
        for (let i = 0; i < s1.length; i++) {
            if (s1[i] === s2[s2Index]) {
                s2Index++;
                if (s2Index === s2.length) {
                    s2Count++;
                    s2Index = 0;
                }
            }
        }
        
        for (let i = 0; i < repeatCount.length; i++) {
            if (nextIndex[i] === s2Index) {
                const prevS1Count = i + 1;
                const prevS2Count = repeatCount[i];
                
                const patternS1Count = s1Count - prevS1Count;
                const patternS2Count = s2Count - prevS2Count;
                
                const remainingS1 = n1 - prevS1Count;
                const patternRepeats = Math.floor(remainingS1 / patternS1Count);
                
                s2Count = prevS2Count + patternRepeats * patternS2Count;
                s1Count = prevS1Count + patternRepeats * patternS1Count;
                break;
            }
        }
        
        repeatCount.push(s2Count);
        nextIndex.push(s2Index);
    }
    
    return Math.floor(s2Count / n2);
}