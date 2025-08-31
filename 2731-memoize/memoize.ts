function memoize(fn: Function): Function {
   const cache = new Map<string, any>();
   let callCount = 0;
   
   const memoized = (...args: any[]) => {
       const key = JSON.stringify(args);
       
       if (cache.has(key)) {
           return cache.get(key);
       }
       
       callCount++;
       const result = fn(...args);
       cache.set(key, result);
       return result;
   };
   
   memoized.getCallCount = () => callCount;
   
   return memoized;
}