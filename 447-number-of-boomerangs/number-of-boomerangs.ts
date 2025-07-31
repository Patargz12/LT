const numberOfBoomerangs = points => {
    let result = 0;
    
    for (let i = 0; i < points.length; i++) {
        const distanceMap = new Map();
        
        for (let j = 0; j < points.length; j++) {
            if (i === j) continue;
            
            const dx = points[i][0] - points[j][0];
            const dy = points[i][1] - points[j][1];
            const distSq = dx * dx + dy * dy;
            
            distanceMap.set(distSq, (distanceMap.get(distSq) || 0) + 1);
        }
        
        for (const count of distanceMap.values()) {
            result += count * (count - 1);
        }
    }
    
    return result;
};