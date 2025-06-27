function findLadders(beginWord: string, endWord: string, wordList: string[]): string[][] {
    const wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return [];

    const parents = new Map<string, Set<string>>();
    const visited = new Set<string>();
    const queue: string[] = [beginWord];
    visited.add(beginWord);

    let found = false;

    while (queue.length && !found) {
        const nextLevel = new Set<string>();
        for (const word of queue) {
            wordSet.delete(word);
        }

        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const word = queue.shift()!;
            const chars = word.split('');

            for (let j = 0; j < word.length; j++) {
                const originalChar = chars[j];
                for (let c = 97; c <= 122; c++) {
                    const newChar = String.fromCharCode(c);
                    if (newChar === originalChar) continue;
                    chars[j] = newChar;
                    const newWord = chars.join('');

                    if (!wordSet.has(newWord)) continue;

                    if (!parents.has(newWord)) parents.set(newWord, new Set());
                    parents.get(newWord)!.add(word);

                    if (!visited.has(newWord)) {
                        nextLevel.add(newWord);
                    }

                    if (newWord === endWord) {
                        found = true;
                    }
                }
                chars[j] = originalChar;
            }
        }

        for (const word of nextLevel) {
            queue.push(word);
            visited.add(word);
        }
    }

    const results: string[][] = [];

    const dfs = (word: string, path: string[]) => {
        if (word === beginWord) {
            results.push([beginWord, ...path.reverse()]);
            return;
        }

        if (!parents.has(word)) return;

        for (const parent of parents.get(word)!) {
            dfs(parent, [...path, word]);
        }
    };

    dfs(endWord, []);

    return results;
}
