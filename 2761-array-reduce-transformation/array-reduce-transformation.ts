function reduce(nums: number[], fn: (accum: number, curr: number) => number, init: number): number {
   let val = init;
   for (let i = 0; i < nums.length; i++) {
       val = fn(val, nums[i]);
   }
   return val;
}