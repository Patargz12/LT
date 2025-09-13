function arrayNesting(nums: number[]): number {
    const n = nums.length
    const visited = new Array(n).fill(false)
    let res = 0

    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            let count = 0
            let j = i
            while (!visited[j]) {
                visited[j] = true
                j = nums[j]
                count++
            }
            res = Math.max(res, count)
        }
    }

    return res
}
