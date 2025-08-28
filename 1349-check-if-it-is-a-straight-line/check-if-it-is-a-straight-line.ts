function checkStraightLine(coordinates: number[][]): boolean {
    const [x1, y1] = coordinates[0];
    const [x2, y2] = coordinates[1];
    
    for (let i = 2; i < coordinates.length; i++) {
        const [x, y] = coordinates[i];
        
        if ((y2 - y1) * (x - x1) !== (y - y1) * (x2 - x1)) {
            return false;
        }
    }
    
    return true;
}