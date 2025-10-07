function selfDividingNumbers(left: number, right: number): number[] {
  const res: number[] = []
  for (let i = left; i <= right; i++) {
    let n = i, valid = true
    while (n > 0) {
      const d = n % 10
      if (d === 0 || i % d !== 0) {
        valid = false
        break
      }
      n = Math.floor(n / 10)
    }
    if (valid) res.push(i)
  }
  return res
}
