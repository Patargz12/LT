function partition(s: string): string[][] {
    const result: string[][] = [];
    const current: string[] = [];
    
    const isPalindrome = (str: string, left: number, right: number): boolean => {
        while (left < right) {
            if (str[left] !== str[right]) return false;
            left++;
            right--;
        }
        return true;
    };
    
    const backtrack = (start: number) => {
        if (start === s.length) {
            result.push([...current]);
            return;
        }
        
        for (let end = start; end < s.length; end++) {
            if (isPalindrome(s, start, end)) {
                current.push(s.substring(start, end + 1));
                backtrack(end + 1);
                current.pop();
            }
        }
    };
    
    backtrack(0);
    return result;
}