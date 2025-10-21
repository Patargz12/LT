function minEatingSpeed(piles: number[], h: number): number {
    let left = 1;
    let right = Math.max(...piles);
    
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        const hours = piles.reduce((sum, pile) => sum + Math.ceil(pile / mid), 0);
        
        if (hours <= h) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    
    return left;
}