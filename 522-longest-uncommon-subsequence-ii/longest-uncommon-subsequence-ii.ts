function findLUSlength(strs: string[]): number {
    function isSubsequence(a: string, b: string): boolean {
        let i = 0, j = 0
        while (i < a.length && j < b.length) {
            if (a[i] === b[j]) i++
            j++
        }
        return i === a.length
    }

    let res = -1
    for (let i = 0; i < strs.length; i++) {
        let uncommon = true
        for (let j = 0; j < strs.length; j++) {
            if (i !== j && isSubsequence(strs[i], strs[j])) {
                uncommon = false
                break
            }
        }
        if (uncommon) res = Math.max(res, strs[i].length)
    }
    return res
}
