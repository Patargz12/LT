function mergeAlternately(word1: string, word2: string): string {
    let i = 0, j = 0, res = ""
    while (i < word1.length && j < word2.length) {
        res += word1[i++] + word2[j++]
    }
    if (i < word1.length) res += word1.slice(i)
    if (j < word2.length) res += word2.slice(j)
    return res
}
