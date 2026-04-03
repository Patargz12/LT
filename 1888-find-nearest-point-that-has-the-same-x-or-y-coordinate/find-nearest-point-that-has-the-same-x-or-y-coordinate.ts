function nearestValidPoint(x: number, y: number, points: number[][]): number {
    let minDist = Number.MAX_SAFE_INTEGER; 
    let resultIdx = -1; 

    for (let i = 0; i < points.length; i++) {
        const [px, py] = points[i]; 

        if (px === x || py === y) {
            const dist = Math.abs(px- x) + Math.abs(py - y); 

            if (dist < minDist ) {
            minDist = dist; 
            resultIdx = i;
        }
        } 

      
    }

    return resultIdx;
};