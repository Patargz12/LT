function flipLights(n, presses) {
    if (presses === 0) return 1;
    
    n = Math.min(n, 3);
    const states = new Set();
    
    for (let mask = 0; mask < 16; mask++) {
        const pressCount = countBits(mask);
        
        if (pressCount % 2 === presses % 2 && pressCount <= presses) {
            const state = getState(n, mask);
            states.add(state);
        }
    }
    
    return states.size;
}

function countBits(mask) {
    let count = 0;
    while (mask) {
        count += mask & 1;
        mask >>= 1;
    }
    return count;
}

function getState(n, mask) {
    let bulbs = (1 << n) - 1;
    
    if (mask & 1) {
        bulbs ^= (1 << n) - 1;
    }
    
    if (mask & 2) {
        for (let i = 1; i < n; i += 2) {
            bulbs ^= (1 << i);
        }
    }
    
    if (mask & 4) {
        for (let i = 0; i < n; i += 2) {
            bulbs ^= (1 << i);
        }
    }
    
    if (mask & 8) {
        for (let i = 0; i < n; i += 3) {
            bulbs ^= (1 << i);
        }
    }
    
    return bulbs;
}