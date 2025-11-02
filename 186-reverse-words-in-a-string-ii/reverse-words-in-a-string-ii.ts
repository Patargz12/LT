function reverseWords(s: string[]): void {
    const reverse = (left: number, right: number): void => {
        while (left < right) {
            [s[left], s[right]] = [s[right], s[left]];
            left++;
            right--;
        }
    };
    
    reverse(0, s.length - 1);
    
    let start = 0;
    for (let i = 0; i <= s.length; i++) {
        if (i === s.length || s[i] === ' ') {
            reverse(start, i - 1);
            start = i + 1;
        }
    }
}