function longestStrChain(words: string[]): number {
  words.sort((a, b) => a.length - b.length);
  
  const dp = new Map<string, number>();
  let maxChain = 1;
  
  for (const word of words) {
    let longest = 0;
    
    for (let i = 0; i < word.length; i++) {
      const prev = word.slice(0, i) + word.slice(i + 1);
      longest = Math.max(longest, dp.get(prev) || 0);
    }
    
    dp.set(word, longest + 1);
    maxChain = Math.max(maxChain, longest + 1);
  }
  
  return maxChain;
}