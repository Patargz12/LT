function isPerfectSquare(num: number): boolean {
    let left = 1;
    let right = num;
    
    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2);
        const square = mid * mid;
        
        if (square === num) {
            return true;
        } else if (square < num) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return false;
}