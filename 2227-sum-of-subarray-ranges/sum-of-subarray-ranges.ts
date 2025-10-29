function subArrayRanges(nums: number[]): number {
  const n = nums.length
  const left = new Array<number>(n)
  const right = new Array<number>(n)
  let stack: number[] = []
  for (let i = 0; i < n; i++) {
    while (stack.length && nums[stack[stack.length - 1]] <= nums[i]) stack.pop()
    left[i] = stack.length ? i - stack[stack.length - 1] : i + 1
    stack.push(i)
  }
  stack = []
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length && nums[stack[stack.length - 1]] < nums[i]) stack.pop()
    right[i] = stack.length ? stack[stack.length - 1] - i : n - i
    stack.push(i)
  }
  let maxSum = 0n
  for (let i = 0; i < n; i++) maxSum += BigInt(nums[i]) * BigInt(left[i]) * BigInt(right[i])

  const l2 = new Array<number>(n)
  const r2 = new Array<number>(n)
  stack = []
  for (let i = 0; i < n; i++) {
    while (stack.length && nums[stack[stack.length - 1]] >= nums[i]) stack.pop()
    l2[i] = stack.length ? i - stack[stack.length - 1] : i + 1
    stack.push(i)
  }
  stack = []
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length && nums[stack[stack.length - 1]] > nums[i]) stack.pop()
    r2[i] = stack.length ? stack[stack.length - 1] - i : n - i
    stack.push(i)
  }
  let minSum = 0n
  for (let i = 0; i < n; i++) minSum += BigInt(nums[i]) * BigInt(l2[i]) * BigInt(r2[i])

  return Number(maxSum - minSum)
}
