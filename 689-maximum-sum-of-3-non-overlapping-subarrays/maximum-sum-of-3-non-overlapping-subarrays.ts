function maxSumOfThreeSubarrays(nums: number[], k: number): number[] {
    const n = nums.length
    const sum = new Array(n + 1).fill(0)
    for (let i = 0; i < n; i++) sum[i + 1] = sum[i] + nums[i]
    const left = new Array(n).fill(0)
    let total = sum[k] - sum[0]
    for (let i = k; i < n; i++) {
        if (sum[i + 1] - sum[i + 1 - k] > total) {
            left[i] = i + 1 - k
            total = sum[i + 1] - sum[i + 1 - k]
        } else left[i] = left[i - 1]
    }
    const right = new Array(n).fill(0)
    right[n - k] = n - k
    total = sum[n] - sum[n - k]
    for (let i = n - k - 1; i >= 0; i--) {
        if (sum[i + k] - sum[i] >= total) {
            right[i] = i
            total = sum[i + k] - sum[i]
        } else right[i] = right[i + 1]
    }
    let res = [-1, -1, -1]
    let maxSum = 0
    for (let mid = k; mid <= n - 2 * k; mid++) {
        const l = left[mid - 1], r = right[mid + k]
        const total = (sum[l + k] - sum[l]) + (sum[mid + k] - sum[mid]) + (sum[r + k] - sum[r])
        if (total > maxSum) {
            maxSum = total
            res = [l, mid, r]
        }
    }
    return res
}
