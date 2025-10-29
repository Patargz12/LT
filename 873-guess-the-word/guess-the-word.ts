interface Master {
  guess(word: string): number
}

function findSecretWord(words: string[], master: Master): void {
  const match = (a: string, b: string): number => {
    let c = 0
    for (let i = 0; i < 6; i++) if (a[i] === b[i]) c++
    return c
  }

  let candidates = words.slice()
  for (let attempt = 0; attempt < 30 && candidates.length > 0; attempt++) {
    let best = ""
    let bestScore = Infinity
    for (const w1 of candidates) {
      const freq = new Array(7).fill(0)
      for (const w2 of candidates) freq[match(w1, w2)]++
      const score = Math.max(...freq)
      if (score < bestScore) {
        bestScore = score
        best = w1
      }
    }
    const res = master.guess(best)
    if (res === 6) return
    candidates = candidates.filter(w => match(w, best) === res)
  }
}
