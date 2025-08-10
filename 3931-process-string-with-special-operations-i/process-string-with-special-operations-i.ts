function processStr(s: string): string {
    let result = '';
    
    for (let char of s) {
        if (char >= 'a' && char <= 'z') {
            result += char;
        } else if (char === '*') {
            if (result.length > 0) {
                result = result.slice(0, -1);
            }
        } else if (char === '#') {
            result += result;
        } else if (char === '%') {
            result = result.split('').reverse().join('');
        }
    }
    
    return result;
}