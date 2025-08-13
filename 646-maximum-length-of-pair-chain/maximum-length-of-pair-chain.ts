const findLongestChain = (pairs) => {
    pairs.sort((a, b) => a[1] - b[1]);
    
    let count = 1;
    let lastEnd = pairs[0][1];
    
    for (let i = 1; i < pairs.length; i++) {
        if (pairs[i][0] > lastEnd) {
            count++;
            lastEnd = pairs[i][1];
        }
    }
    
    return count;
};

const findLongestChainDP = (pairs) => {
    pairs.sort((a, b) => a[0] - b[0]);
    const dp = Array(pairs.length).fill(1);
    
    for (let i = 1; i < pairs.length; i++) {
        for (let j = 0; j < i; j++) {
            if (pairs[j][1] < pairs[i][0]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    
    return Math.max(...dp);
};