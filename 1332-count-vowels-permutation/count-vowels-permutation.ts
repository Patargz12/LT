function countVowelPermutation(n: number): number {
  const MOD = 1e9 + 7;
  
  let a = 1, e = 1, i = 1, o = 1, u = 1;
  
  for (let len = 2; len <= n; len++) {
    const newA = e % MOD;
    const newE = (a + i) % MOD;
    const newI = (a + e + o + u) % MOD;
    const newO = (i + u) % MOD;
    const newU = a % MOD;
    
    a = newA;
    e = newE;
    i = newI;
    o = newO;
    u = newU;
  }
  
  return (a + e + i + o + u) % MOD;
}