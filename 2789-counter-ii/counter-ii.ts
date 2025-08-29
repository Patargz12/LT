function createCounter(init: number): { increment: () => number; decrement: () => number; reset: () => number } {
   let current = init;
   return {
       increment(): number {
           return ++current;
       },
       decrement(): number {
           return --current;
       },
       reset(): number {
           current = init;
           return current;
       }
   };
}