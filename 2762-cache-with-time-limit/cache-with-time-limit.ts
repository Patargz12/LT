class TimeLimitedCache {
   private cache = new Map<number, { value: number; expiry: number }>();

   set(key: number, value: number, duration: number): boolean {
       const now = Date.now();
       const exists = this.cache.has(key) && this.cache.get(key)!.expiry > now;
       
       this.cache.set(key, { value, expiry: now + duration });
       return exists;
   }

   get(key: number): number {
       const entry = this.cache.get(key);
       if (!entry || entry.expiry <= Date.now()) {
           return -1;
       }
       return entry.value;
   }

   count(): number {
       const now = Date.now();
       let count = 0;
       for (const [key, entry] of this.cache) {
           if (entry.expiry > now) {
               count++;
           }
       }
       return count;
   }
}