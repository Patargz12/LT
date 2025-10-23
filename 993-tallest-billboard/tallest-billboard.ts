function tallestBillboard(rods: number[]): number {
    let dp = new Map<number, number>()
    dp.set(0, 0)
    for (let rod of rods) {
        const cur = new Map(dp)
        for (let [diff, height] of cur) {
            dp.set(diff + rod, Math.max(dp.get(diff + rod) || 0, height))
            const newDiff = Math.abs(diff - rod)
            dp.set(newDiff, Math.max(dp.get(newDiff) || 0, height + Math.min(rod, diff)))
        }
    }
    return dp.get(0) || 0
}
