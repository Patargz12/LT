function sortArray(nums: number[]): number {
  const n = nums.length

  const movesToTarget = (desPos: number[]): number => {

    const curPos = new Array<number>(n)
    for (let i = 0; i < n; i++) curPos[nums[i]] = i

 
    const f = new Array<number>(n)
    for (let idx = 0; idx < n; idx++) {
      const val = nums[idx]
      f[idx] = desPos[val]
    }

    const vis = new Array<boolean>(n).fill(false)
    let moves = 0
    const zeroIndex = curPos[0]

    for (let i = 0; i < n; i++) {
      if (vis[i]) continue
    
      let cur = i
      let len = 0
      while (!vis[cur]) {
        vis[cur] = true
        len++
        cur = f[cur]
      }
      if (len <= 1) continue

    }


    vis.fill(false)
    moves = 0
    for (let i = 0; i < n; i++) {
      if (vis[i]) continue
      let cur = i
      const members: number[] = []
      while (!vis[cur]) {
        vis[cur] = true
        members.push(cur)
        cur = f[cur]
      }
      const len = members.length
      if (len <= 1) continue
    
      let containsZero = false
      for (const m of members) {
        if (m === zeroIndex) {
          containsZero = true
          break
        }
      }
      if (containsZero) moves += len - 1
      else moves += len + 1
    }

    return moves
  }


  const desA = new Array<number>(n)
  for (let v = 0; v < n; v++) desA[v] = v
 
  const desB = new Array<number>(n)
  desB[0] = n - 1
  for (let v = 1; v < n; v++) desB[v] = v - 1

  return Math.min(movesToTarget(desA), movesToTarget(desB))
}
