function anagramMappings(nums1: number[], nums2: number[]): number[] {
    const indexMap = new Map<number, number>();
    
    for (let i = 0; i < nums2.length; i++) {
        if (!indexMap.has(nums2[i])) {
            indexMap.set(nums2[i], i);
        }
    }
    
    const result: number[] = [];
    
    for (let i = 0; i < nums1.length; i++) {
        result.push(indexMap.get(nums1[i])!);
    }
    
    return result;
}