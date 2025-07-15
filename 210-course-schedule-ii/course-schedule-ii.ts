const findOrder = (numCourses, prerequisites) => {
    const indegree = new Array(numCourses).fill(0);
    const graph = Array.from({ length: numCourses }, () => []);
    
    for (const [course, prereq] of prerequisites) {
        graph[prereq].push(course);
        indegree[course]++;
    }
    
    const queue = [];
    const result = [];
    
    for (let i = 0; i < numCourses; i++) {
        if (indegree[i] === 0) {
            queue.push(i);
        }
    }
    
    while (queue.length > 0) {
        const current = queue.shift();
        result.push(current);
        
        for (const neighbor of graph[current]) {
            indegree[neighbor]--;
            if (indegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        }
    }
    
    return result.length === numCourses ? result : [];
};