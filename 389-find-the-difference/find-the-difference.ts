function findTheDifference(s: string, t: string): string {
    let res = 0
    for (let ch of s) res ^= ch.charCodeAt(0)
    for (let ch of t) res ^= ch.charCodeAt(0)
    return String.fromCharCode(res)
}
