function numSubseq(nums: number[], target: number): number {
    const mod = 1e9 + 7
    nums.sort((a, b) => a - b)
    const n = nums.length
    const pow2 = new Array(n).fill(1)
    for (let i = 1; i < n; i++) {
        pow2[i] = (pow2[i - 1] * 2) % mod
    }

    let res = 0
    let left = 0, right = n - 1
    while (left <= right) {
        if (nums[left] + nums[right] <= target) {
            res = (res + pow2[right - left]) % mod
            left++
        } else {
            right--
        }
    }
    return res
}
