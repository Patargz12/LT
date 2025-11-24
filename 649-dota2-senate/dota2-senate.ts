function predictPartyVictory(senate: string): string {
  const R: number[] = []
  const D: number[] = []
  const n = senate.length

  for (let i = 0; i < n; i++) {
    if (senate[i] === "R") R.push(i)
    else D.push(i)
  }

  while (R.length && D.length) {
    const r = R.shift()!
    const d = D.shift()!
    if (r < d) R.push(r + n)
    else D.push(d + n)
  }

  return R.length ? "Radiant" : "Dire"
}
