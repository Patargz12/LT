function shipWithinDays(weights: number[], days: number): number {
    let left = Math.max(...weights);
    let right = weights.reduce((a, b) => a + b, 0);
    
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        let daysNeeded = 1;
        let currentWeight = 0;
        
        for (const weight of weights) {
            if (currentWeight + weight > mid) {
                daysNeeded++;
                currentWeight = weight;
            } else {
                currentWeight += weight;
            }
        }
        
        if (daysNeeded <= days) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    
    return left;
}