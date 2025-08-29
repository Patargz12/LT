function expect(val: any): { toBe: (val: any) => boolean; notToBe: (val: any) => boolean } {
   return {
       toBe(expected: any): boolean {
           if (val === expected) {
               return true;
           }
           throw new Error("Not Equal");
       },
       notToBe(expected: any): boolean {
           if (val !== expected) {
               return true;
           }
           throw new Error("Equal");
       }
   };
}