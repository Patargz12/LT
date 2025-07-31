const findKthNumber = (n, k) => {
    let current = 1;
    k--;
    
    while (k > 0) {
        const steps = countSteps(n, current, current + 1);
        if (steps <= k) {
            current++;
            k -= steps;
        } else {
            current *= 10;
            k--;
        }
    }
    
    return current;
};

const countSteps = (n, prefix1, prefix2) => {
    let steps = 0;
    while (prefix1 <= n) {
        steps += Math.min(n + 1, prefix2) - prefix1;
        prefix1 *= 10;
        prefix2 *= 10;
    }
    return steps;
};