function myPow(x: number, n: number): number {
   if (n === 0) return 1;
   if (n < 0) return 1 / myPow(x, -n);
   
   if (n % 2 === 0) {
       const half = myPow(x, n / 2);
       return half * half;
   }
   
   return x * myPow(x, n - 1);
}