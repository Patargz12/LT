function constructArray(n: number, k: number): number[] {
    const res: number[] = []
    let left = 1, right = k + 1
    while (left <= right) {
        res.push(left++)
        if (left <= right) res.push(right--)
    }
    for (let i = k + 2; i <= n; i++) {
        res.push(i)
    }
    return res
}
