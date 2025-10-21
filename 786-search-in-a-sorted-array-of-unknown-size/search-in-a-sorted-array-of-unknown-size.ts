var search = function(reader, target) {
    let left = 0;
    let right = 1;
    
    while (reader.get(right) < target && reader.get(right) !== 2147483647) {
        left = right;
        right *= 2;
    }
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const val = reader.get(mid);
        
        if (val === target) {
            return mid;
        } else if (val === 2147483647 || val > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    
    return -1;
};