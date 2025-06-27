function ladderLength(beginWord, endWord, wordList) {
    const wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return 0;
    
    const queue = [beginWord];
    let level = 1;
    
    while (queue.length) {
        const size = queue.length;
        
        for (let i = 0; i < size; i++) {
            const word = queue.shift();
            
            if (word === endWord) return level;
            
            for (let j = 0; j < word.length; j++) {
                for (let k = 0; k < 26; k++) {
                    const newChar = String.fromCharCode(97 + k);
                    if (newChar === word[j]) continue;
                    
                    const newWord = word.slice(0, j) + newChar + word.slice(j + 1);
                    
                    if (wordSet.has(newWord)) {
                        wordSet.delete(newWord);
                        queue.push(newWord);
                    }
                }
            }
        }
        
        level++;
    }
    
    return 0;
}