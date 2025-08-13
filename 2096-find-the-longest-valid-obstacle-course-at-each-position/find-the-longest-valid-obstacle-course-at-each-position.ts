function longestObstacleCourseAtEachPosition(obstacles: number[]): number[] {
    const result: number[] = [];
    const tails: number[] = [];
    
    for (let i = 0; i < obstacles.length; i++) {
        const height = obstacles[i];
        let left = 0, right = tails.length;
        
        // Binary search for rightmost position where tails[pos] <= height
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (tails[mid] <= height) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        
        // Extend or replace in tails array
        if (left === tails.length) {
            tails.push(height);
        } else {
            tails[left] = height;
        }
        
        // Length of longest course ending at position i
        result[i] = left + 1;
    }
    
    return result;
}