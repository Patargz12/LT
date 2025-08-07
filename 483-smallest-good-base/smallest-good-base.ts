function smallestGoodBase(n) {
    const num = BigInt(n);
    
    for (let len = 60; len >= 2; len--) {
        const k = findBase(num, len);
        if (k !== -1n) {
            return k.toString();
        }
    }
    
    return (num - 1n).toString();
}

function findBase(n, len) {
    let left = 2n;
    let right = BigInt(Math.floor(Number(n) ** (1.0 / (len - 1)))) + 1n;
    
    while (left <= right) {
        const mid = (left + right) / 2n;
        const sum = geometricSum(mid, len);
        
        if (sum === n) {
            return mid;
        } else if (sum < n) {
            left = mid + 1n;
        } else {
            right = mid - 1n;
        }
    }
    
    return -1n;
}

function geometricSum(base, len) {
    let result = 0n;
    let power = 1n;
    
    for (let i = 0; i < len; i++) {
        result += power;
        if (i < len - 1) {
            power *= base;
        }
    }
    
    return result;
}