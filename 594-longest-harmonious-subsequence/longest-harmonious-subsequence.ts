function findLHS(nums: number[]): number {
    const map = new Map<number, number>()
    for (const n of nums) {
        map.set(n, (map.get(n) || 0) + 1)
    }
    let res = 0
    for (const [key, val] of map) {
        if (map.has(key + 1)) {
            res = Math.max(res, val + (map.get(key + 1) || 0))
        }
    }
    return res
}
