function countArrangement(n: number): number {
    let count = 0
    const used = new Array(n + 1).fill(false)

    function backtrack(pos: number) {
        if (pos > n) {
            count++
            return
        }
        for (let i = 1; i <= n; i++) {
            if (!used[i] && (i % pos === 0 || pos % i === 0)) {
                used[i] = true
                backtrack(pos + 1)
                used[i] = false
            }
        }
    }

    backtrack(1)
    return count
}
