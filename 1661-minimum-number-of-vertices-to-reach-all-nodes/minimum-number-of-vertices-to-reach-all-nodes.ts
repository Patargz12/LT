function findSmallestSetOfVertices(n, edges) {
   const hasIncoming = new Set();
   
   for (const [from, to] of edges) {
       hasIncoming.add(to);
   }
   
   const result = [];
   for (let i = 0; i < n; i++) {
       if (!hasIncoming.has(i)) {
           result.push(i);
       }
   }
   
   return result;
}