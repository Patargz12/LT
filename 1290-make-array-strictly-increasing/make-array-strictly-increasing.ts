const makeArrayIncreasing = (arr1, arr2) => {
    arr2.sort((a, b) => a - b);
    const uniqueArr2 = [...new Set(arr2)];
    
    const findNext = (val) => {
        let left = 0, right = uniqueArr2.length;
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (uniqueArr2[mid] <= val) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        return left < uniqueArr2.length ? uniqueArr2[left] : Infinity;
    };
    
    let dp = new Map();
    dp.set(-1, 0);
    
    for (let i = 0; i < arr1.length; i++) {
        const newDp = new Map();
        
        for (const [prev, ops] of dp) {
            if (arr1[i] > prev) {
                const current = newDp.get(arr1[i]) ?? Infinity;
                newDp.set(arr1[i], Math.min(current, ops));
            }
            
            const next = findNext(prev);
            if (next !== Infinity) {
                const current = newDp.get(next) ?? Infinity;
                newDp.set(next, Math.min(current, ops + 1));
            }
        }
        
        dp = newDp;
    }
    
    let result = Infinity;
    for (const ops of dp.values()) {
        result = Math.min(result, ops);
    }
    
    return result === Infinity ? -1 : result;
};