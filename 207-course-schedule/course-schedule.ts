const canFinish = (numCourses, prerequisites) => {
    const graph = Array(numCourses).fill(null).map(() => []);
    const state = new Array(numCourses).fill(0);
    
    for (const [course, prereq] of prerequisites) {
        graph[prereq].push(course);
    }
    
    const hasCycle = course => {
        if (state[course] === 1) return true;
        if (state[course] === 2) return false;
        
        state[course] = 1;
        for (const next of graph[course]) {
            if (hasCycle(next)) return true;
        }
        state[course] = 2;
        return false;
    };
    
    for (let i = 0; i < numCourses; i++) {
        if (hasCycle(i)) return false;
    }
    
    return true;
};