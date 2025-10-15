function minStickers(stickers: string[], target: string): number {
  const n = stickers.length
  const stickerCounts = stickers.map(sticker => {
    const count = Array(26).fill(0)
    for (const ch of sticker) count[ch.charCodeAt(0) - 97]++
    return count
  })

  const memo = new Map<string, number>()
  memo.set('', 0)

  function helper(remain: string): number {
    if (memo.has(remain)) return memo.get(remain)!
    const targetCount = Array(26).fill(0)
    for (const ch of remain) targetCount[ch.charCodeAt(0) - 97]++

    let res = Infinity
    for (const sticker of stickerCounts) {
      if (sticker[remain.charCodeAt(0) - 97] === 0) continue
      const newTarget: string[] = []
      for (let i = 0; i < 26; i++) {
        if (targetCount[i] > 0) {
          const remainCount = targetCount[i] - sticker[i]
          for (let j = 0; j < Math.max(0, remainCount); j++) {
            newTarget.push(String.fromCharCode(97 + i))
          }
        }
      }
      const s = newTarget.join('')
      const tmp = helper(s)
      if (tmp !== -1) res = Math.min(res, 1 + tmp)
    }

    memo.set(remain, res === Infinity ? -1 : res)
    return memo.get(remain)!
  }

  return helper(target)
}
