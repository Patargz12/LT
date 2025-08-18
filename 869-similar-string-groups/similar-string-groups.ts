function numSimilarGroups(strs) {
   const n = strs.length;
   const parent = new Array(n);
   for (let i = 0; i < n; i++) {
       parent[i] = i;
   }
   
   function find(x) {
       if (parent[x] !== x) {
           parent[x] = find(parent[x]);
       }
       return parent[x];
   }
   
   function union(x, y) {
       parent[find(x)] = find(y);
   }
   
   function isSimilar(a, b) {
       let diff = 0;
       for (let i = 0; i < a.length; i++) {
           if (a[i] !== b[i]) {
               diff++;
               if (diff > 2) return false;
           }
       }
       return diff === 0 || diff === 2;
   }
   
   for (let i = 0; i < n; i++) {
       for (let j = i + 1; j < n; j++) {
           if (isSimilar(strs[i], strs[j])) {
               union(i, j);
           }
       }
   }
   
   const groups = new Set();
   for (let i = 0; i < n; i++) {
       groups.add(find(i));
   }
   
   return groups.size;
}