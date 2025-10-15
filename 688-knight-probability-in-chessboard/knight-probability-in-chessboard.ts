function knightProbability(n: number, k: number, row: number, column: number): number {
  const moves = [
    [2, 1], [1, 2], [-1, 2], [-2, 1],
    [-2, -1], [-1, -2], [1, -2], [2, -1]
  ]
  let dp = Array.from({ length: n }, () => Array(n).fill(0))
  dp[row][column] = 1
  for (let step = 0; step < k; step++) {
    const nextDp = Array.from({ length: n }, () => Array(n).fill(0))
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (dp[i][j] > 0) {
          for (const [dx, dy] of moves) {
            const x = i + dx, y = j + dy
            if (x >= 0 && x < n && y >= 0 && y < n) {
              nextDp[x][y] += dp[i][j] / 8
            }
          }
        }
      }
    }
    dp = nextDp
  }
  let res = 0
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      res += dp[i][j]
    }
  }
  return res
}
