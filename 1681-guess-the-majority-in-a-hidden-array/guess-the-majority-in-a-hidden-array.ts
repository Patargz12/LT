function guessMajority(reader: ArrayReader): number {
    const n = reader.length()
    const base = reader.query(0, 1, 2, 3)
    const sameTo3: boolean[] = Array(n).fill(false)
    sameTo3[3] = true
    for (let i = 4; i < n; i++) sameTo3[i] = (reader.query(0, 1, 2, i) === base)
    const r0 = reader.query(1, 2, 3, 4) === base
    const r1 = reader.query(0, 2, 3, 4) === base
    const r2 = reader.query(0, 1, 3, 4) === base
    const ref = sameTo3[4]
    sameTo3[0] = (r0 === ref)
    sameTo3[1] = (r1 === ref)
    sameTo3[2] = (r2 === ref)
    let cntSame = 0, idxSame = -1, cntDiff = 0, idxDiff = -1
    for (let i = 0; i < n; i++) {
        if (sameTo3[i]) { cntSame++; idxSame = i } else { cntDiff++; idxDiff = i }
    }
    if (cntSame > cntDiff) return idxSame
    if (cntDiff > cntSame) return idxDiff
    return -1
}
