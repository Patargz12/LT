function equalPairs(grid: number[][]): number {
  const n = grid.length
  const rows = new Map<string, number>()

  for (let i = 0; i < n; i++) {
    const key = grid[i].join(',')
    rows.set(key, (rows.get(key) || 0) + 1)
  }

  let result = 0

  for (let c = 0; c < n; c++) {
    const col: number[] = []
    for (let r = 0; r < n; r++) col.push(grid[r][c])
    const key = col.join(',')
    if (rows.has(key)) result += rows.get(key)!
  }

  return result
}
