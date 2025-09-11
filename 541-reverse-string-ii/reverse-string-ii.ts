function reverseStr(s, k) {
    const arr = s.split('');
    
    for (let i = 0; i < arr.length; i += 2 * k) {
        const end = Math.min(i + k - 1, arr.length - 1);
        
        let left = i;
        let right = end;
        
        while (left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }
    
    return arr.join('');
}