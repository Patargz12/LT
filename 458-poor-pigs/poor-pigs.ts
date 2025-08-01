function poorPigs(buckets, minutesToDie, minutesToTest) {
    const tests = Math.floor(minutesToTest / minutesToDie);
    const states = tests + 1;
    
    let pigs = 0;
    while (states ** pigs < buckets) {
        pigs++;
    }
    
    return pigs;
}