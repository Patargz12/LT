function findAllConcatenatedWordsInADict(words) {
    const wordSet = new Set(words);
    const memo = new Map();
    
    function canForm(word, start = 0, count = 0) {
        if (start === word.length) {
            return count >= 2;
        }
        
        const key = `${word}-${start}-${count}`;
        if (memo.has(key)) {
            return memo.get(key);
        }
        
        for (let end = start + 1; end <= word.length; end++) {
            const prefix = word.slice(start, end);
            if (wordSet.has(prefix) && canForm(word, end, count + 1)) {
                memo.set(key, true);
                return true;
            }
        }
        
        memo.set(key, false);
        return false;
    }
    
    return words.filter(word => canForm(word));
}