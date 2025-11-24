function removeStars(s: string): string {
  const stack: string[] = []

  for (const ch of s) {
    if (ch === "*") stack.pop()
    else stack.push(ch)
  }

  return stack.join("")
}
