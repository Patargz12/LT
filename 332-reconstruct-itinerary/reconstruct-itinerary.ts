const findItinerary = tickets => {
    const graph = new Map();
    
    for (const [from, to] of tickets) {
        if (!graph.has(from)) graph.set(from, []);
        graph.get(from).push(to);
    }
    
    for (const destinations of graph.values()) {
        destinations.sort();
    }
    
    const result = [];
    
    const dfs = node => {
        const destinations = graph.get(node) || [];
        while (destinations.length > 0) {
            const next = destinations.shift();
            dfs(next);
        }
        result.push(node);
    };
    
    dfs("JFK");
    
    return result.reverse();
};