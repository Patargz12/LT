function nearestPalindromic(n: string): string {
    const len = n.length
    const num = BigInt(n)

    const candidates = new Set<bigint>()
    candidates.add(BigInt(10) ** BigInt(len - 1) - 1n)
    candidates.add(BigInt(10) ** BigInt(len) + 1n)

    const prefix = BigInt(n.slice(0, Math.ceil(len / 2)))
    for (let i = -1n; i <= 1n; i++) {
        let p = (prefix + i).toString()
        let pal: bigint
        if (len % 2 === 0) {
            pal = BigInt(p + p.split('').reverse().join(''))
        } else {
            pal = BigInt(p + p.slice(0, -1).split('').reverse().join(''))
        }
        candidates.add(pal)
    }

    let closest: bigint | null = null
    for (let cand of candidates) {
        if (cand === num) continue
        if (closest === null) {
            closest = cand
        } else {
            const diff1 = num > cand ? num - cand : cand - num
            const diff2 = num > closest ? num - closest : closest - num
            if (diff1 < diff2 || (diff1 === diff2 && cand < closest)) {
                closest = cand
            }
        }
    }

    return closest!.toString()
}
