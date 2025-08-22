function nextGreatestLetter(letters: string[], target: string): string {
    let left = 0;
    let right = letters.length - 1;
    
    if (target >= letters[right] || target < letters[left]) {
        return letters[0];
    }
    
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        
        if (letters[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    
    return letters[left];
}

function nextGreatestLetterV2(letters: string[], target: string): string {
    let left = 0;
    let right = letters.length;
    
    while (left < right) {
        const mid = left + Math.floor((right - left) / 2);
        
        if (letters[mid] > target) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    
    return letters[left % letters.length];
}