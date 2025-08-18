function equationsPossible(equations) {
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
       parent[find(x)] = find(y);
   }
   
   for (const eq of equations) {
       if (eq[1] === '=') {
           const x = eq.charCodeAt(0) - 97;
           const y = eq.charCodeAt(3) - 97;
           union(x, y);
       }
   }
   
   for (const eq of equations) {
       if (eq[1] === '!') {
           const x = eq.charCodeAt(0) - 97;
           const y = eq.charCodeAt(3) - 97;
           if (find(x) === find(y)) {
               return false;
           }
       }
   }
   
   return true;
}