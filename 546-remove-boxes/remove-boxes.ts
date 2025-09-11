function removeBoxes(boxes) {
    const n = boxes.length;
    const memo = new Map();
    
    function dp(i, j, k) {
        if (i > j) return 0;
        
        const key = `${i},${j},${k}`;
        if (memo.has(key)) return memo.get(key);
        
        let originalI = i;
        while (i + 1 <= j && boxes[i] === boxes[i + 1]) {
            i++;
            k++;
        }
        
        let result = (k + 1) * (k + 1) + dp(i + 1, j, 0);
        
        for (let m = i + 1; m <= j; m++) {
            if (boxes[m] === boxes[originalI]) {
                result = Math.max(result, dp(i + 1, m - 1, 0) + dp(m, j, k + 1));
            }
        }
        
        memo.set(key, result);
        return result;
    }
    
    return dp(0, n - 1, 0);
}