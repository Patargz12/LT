interface ArrayReader {
    compareSub(l: number, r: number, x: number, y: number): number;
    length(): number;
}

function getIndex(reader: ArrayReader): number {
    let left = 0;
    let right = reader.length() - 1;
    
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        const leftSize = mid - left + 1;
        const rightSize = right - mid;
        
        let cmp: number;
        
        if (leftSize === rightSize) {
            cmp = reader.compareSub(left, mid, mid + 1, right);
        } else if (leftSize < rightSize) {
            cmp = reader.compareSub(left, mid, mid + 1, mid + leftSize);
        } else {
            cmp = reader.compareSub(left, left + rightSize - 1, mid + 1, right);
        }
        
        if (cmp === 0) {
            if (leftSize === rightSize) {
                return left;
            } else if (leftSize < rightSize) {
                left = mid + leftSize + 1;
            } else {
                left = left + rightSize;
                right = mid;
            }
        } else if (cmp > 0) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    
    return left;
}