function smallestEquivalentString(s1, s2, baseStr) {
   const parent = new Array(26);
   for (let i = 0; i < 26; i++) {
       parent[i] = i;
   }
   
   function find(x) {
       if (parent[x] !== x) {
           parent[x] = find(parent[x]);
       }
       return parent[x];
   }
   
   function union(x, y) {
       const rootX = find(x);
       const rootY = find(y);
       if (rootX !== rootY) {
           parent[Math.max(rootX, rootY)] = Math.min(rootX, rootY);
       }
   }
   
   for (let i = 0; i < s1.length; i++) {
       const x = s1.charCodeAt(i) - 97;
       const y = s2.charCodeAt(i) - 97;
       union(x, y);
   }
   
   let result = '';
   for (const char of baseStr) {
       const charCode = char.charCodeAt(0) - 97;
       const root = find(charCode);
       result += String.fromCharCode(root + 97);
   }
   
   return result;
}