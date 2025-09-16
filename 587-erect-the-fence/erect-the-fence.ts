function outerTrees(trees: number[][]): number[][] {
    trees.sort((a, b) => a[0] - b[0] || a[1] - b[1])
    const cross = (o: number[], a: number[], b: number[]) =>
        (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0])
    const lower: number[][] = []
    for (let t of trees) {
        while (lower.length >= 2 && cross(lower[lower.length - 2], lower[lower.length - 1], t) < 0) {
            lower.pop()
        }
        lower.push(t)
    }
    const upper: number[][] = []
    for (let i = trees.length - 1; i >= 0; i--) {
        let t = trees[i]
        while (upper.length >= 2 && cross(upper[upper.length - 2], upper[upper.length - 1], t) < 0) {
            upper.pop()
        }
        upper.push(t)
    }
    const set = new Set(lower.concat(upper).map(p => p[0] + ',' + p[1]))
    return Array.from(set).map(s => s.split(',').map(Number))
}
