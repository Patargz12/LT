function successfulPairs(spells: number[], potions: number[], success: number): number[] {
    potions.sort((a, b) => a - b)
    let m = potions.length
    let res: number[] = []

    for (let s of spells) {
        let left = 0, right = m - 1, idx = m
        while (left <= right) {
            let mid = Math.floor((left + right) / 2)
            if (BigInt(s) * BigInt(potions[mid]) >= BigInt(success)) {
                idx = mid
                right = mid - 1
            } else {
                left = mid + 1
            }
        }
        res.push(m - idx)
    }
    return res
}
