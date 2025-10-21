function sortItems(n: number, m: number, group: number[], beforeItems: number[][]): number[] {
    let groupId = m;
    for (let i = 0; i < n; i++) {
        if (group[i] === -1) {
            group[i] = groupId++;
        }
    }
    
    const itemGraph = Array(n).fill(0).map(() => []);
    const itemIndegree = Array(n).fill(0);
    
    const groupGraph = Array(groupId).fill(0).map(() => []);
    const groupIndegree = Array(groupId).fill(0);
    
    for (let i = 0; i < n; i++) {
        for (const prev of beforeItems[i]) {
            itemGraph[prev].push(i);
            itemIndegree[i]++;
            
            if (group[i] !== group[prev] && !groupGraph[group[prev]].includes(group[i])) {
                groupGraph[group[prev]].push(group[i]);
                groupIndegree[group[i]]++;
            }
        }
    }
    
    const itemsByGroup = Array(groupId).fill(0).map(() => []);
    for (let i = 0; i < n; i++) {
        itemsByGroup[group[i]].push(i);
    }
    
    const sortedGroups: number[] = [];
    const groupQueue: number[] = [];
    
    for (let i = 0; i < groupId; i++) {
        if (groupIndegree[i] === 0) {
            groupQueue.push(i);
        }
    }
    
    while (groupQueue.length > 0) {
        const grp = groupQueue.shift()!;
        sortedGroups.push(grp);
        
        for (const nextGroup of groupGraph[grp]) {
            groupIndegree[nextGroup]--;
            if (groupIndegree[nextGroup] === 0) {
                groupQueue.push(nextGroup);
            }
        }
    }
    
    if (sortedGroups.length !== groupId) return [];
    
    const result: number[] = [];
    const itemIndegreeCopy = [...itemIndegree];
    
    for (const grp of sortedGroups) {
        const items = itemsByGroup[grp];
        const queue: number[] = [];
        let count = 0;
        
        for (const item of items) {
            if (itemIndegreeCopy[item] === 0) {
                queue.push(item);
            }
        }
        
        while (queue.length > 0) {
            const item = queue.shift()!;
            result.push(item);
            count++;
            
            for (const next of itemGraph[item]) {
                itemIndegreeCopy[next]--;
                if (itemIndegreeCopy[next] === 0 && group[next] === grp) {
                    queue.push(next);
                }
            }
        }
        
        if (count !== items.length) return [];
    }
    
    return result;
}