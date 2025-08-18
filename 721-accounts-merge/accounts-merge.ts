function accountsMerge(accounts) {
   const emailToName = new Map();
   const graph = new Map();
   
   for (const account of accounts) {
       const name = account[0];
       const firstEmail = account[1];
       
       for (let i = 1; i < account.length; i++) {
           const email = account[i];
           emailToName.set(email, name);
           
           if (!graph.has(email)) {
               graph.set(email, []);
           }
           if (!graph.has(firstEmail)) {
               graph.set(firstEmail, []);
           }
           
           graph.get(email).push(firstEmail);
           graph.get(firstEmail).push(email);
       }
   }
   
   const visited = new Set();
   const result = [];
   
   for (const email of graph.keys()) {
       if (!visited.has(email)) {
           const component = [];
           dfs(email, graph, visited, component);
           component.sort();
           result.push([emailToName.get(email), ...component]);
       }
   }
   
   return result;
}

function dfs(email, graph, visited, component) {
   visited.add(email);
   component.push(email);
   
   for (const neighbor of graph.get(email)) {
       if (!visited.has(neighbor)) {
           dfs(neighbor, graph, visited, component);
       }
   }
}