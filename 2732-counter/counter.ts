function createCounter(n: number): () => number {
   let current = n;
   return function(): number {
       return current++;
   };
}