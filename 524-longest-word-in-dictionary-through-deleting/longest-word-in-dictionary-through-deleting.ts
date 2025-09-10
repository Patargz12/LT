function findLongestWord(s: string, dictionary: string[]): string {
    function isSubsequence(a: string, b: string): boolean {
        let i = 0, j = 0
        while (i < a.length && j < b.length) {
            if (a[i] === b[j]) i++
            j++
        }
        return i === a.length
    }

    let res = ""
    for (const word of dictionary) {
        if (isSubsequence(word, s)) {
            if (word.length > res.length || (word.length === res.length && word < res)) {
                res = word
            }
        }
    }
    return res
}
