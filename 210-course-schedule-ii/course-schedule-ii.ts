function findOrder(numCourses, prerequisites) {
   const indegree = new Array(numCourses).fill(0);
   const graph = Array.from({ length: numCourses }, () => []);
   
   for (const [course, prereq] of prerequisites) {
       graph[prereq].push(course);
       indegree[course]++;
   }
   
   const queue = [];
   for (let i = 0; i < numCourses; i++) {
       if (indegree[i] === 0) {
           queue.push(i);
       }
   }
   
   const result = [];
   while (queue.length > 0) {
       const course = queue.shift();
       result.push(course);
       
       for (const nextCourse of graph[course]) {
           indegree[nextCourse]--;
           if (indegree[nextCourse] === 0) {
               queue.push(nextCourse);
           }
       }
   }
   
   return result.length === numCourses ? result : [];
}