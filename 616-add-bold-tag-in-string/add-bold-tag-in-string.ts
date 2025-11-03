function addBoldTag(s, words) {
    const n = s.length;
    const bold = new Array(n).fill(false);
    
    for (const word of words) {
        let start = 0;
        while (true) {
            const idx = s.indexOf(word, start);
            if (idx === -1) break;
            for (let i = idx; i < idx + word.length; i++) {
                bold[i] = true;
            }
            start = idx + 1;
        }
    }
    
    let result = '';
    let i = 0;
    
    while (i < n) {
        if (bold[i]) {
            result += '<b>';
            while (i < n && bold[i]) {
                result += s[i];
                i++;
            }
            result += '</b>';
        } else {
            result += s[i];
            i++;
        }
    }
    
    return result;
}