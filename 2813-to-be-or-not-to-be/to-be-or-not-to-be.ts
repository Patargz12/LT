const expect = (val) => ({
   toBe: (expected) => {
       if (val === expected) return true;
       throw new Error("Not Equal");
   },
   notToBe: (expected) => {
       if (val !== expected) return true;
       throw new Error("Equal");
   }
});