function join(arr1: any[], arr2: any[]): any[] {
   const map = new Map<number, any>();
   
   for (const obj of arr1) {
       map.set(obj.id, obj);
   }
   
   for (const obj of arr2) {
       if (map.has(obj.id)) {
           map.set(obj.id, { ...map.get(obj.id), ...obj });
       } else {
           map.set(obj.id, obj);
       }
   }
   
   return Array.from(map.values()).sort((a, b) => a.id - b.id);
}