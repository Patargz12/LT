const licenseKeyFormatting = (s, k) => {
    const cleaned = s.replace(/-/g, '').toUpperCase();
    
    if (cleaned.length === 0) return '';
    
    const result = [];
    let count = 0;
    
    for (let i = cleaned.length - 1; i >= 0; i--) {
        if (count === k) {
            result.push('-');
            count = 0;
        }
        result.push(cleaned[i]);
        count++;
    }
    
    return result.reverse().join('');
};