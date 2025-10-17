function removeComments(source: string[]): string[] {
  const res: string[] = []
  let inBlock = false
  let buffer = ""
  for (const line of source) {
    let i = 0
    while (i < line.length) {
      if (!inBlock && i + 1 < line.length && line[i] === '/' && line[i + 1] === '*') {
        inBlock = true
        i += 2
      } else if (inBlock && i + 1 < line.length && line[i] === '*' && line[i + 1] === '/') {
        inBlock = false
        i += 2
      } else if (!inBlock && i + 1 < line.length && line[i] === '/' && line[i + 1] === '/') {
        break
      } else if (!inBlock) {
        buffer += line[i]
        i++
      } else {
        i++
      }
    }
    if (!inBlock && buffer.length > 0) {
      res.push(buffer)
      buffer = ""
    }
  }
  return res
}
