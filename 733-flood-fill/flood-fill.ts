const floodFill = (image, sr, sc, color) => {
    const startColor = image[sr][sc];
    
    // Early return if color is already the target
    if (startColor === color) return image;
    
    const rows = image.length;
    const cols = image[0].length;
    const queue = [[sr, sc]];
    
    // Directions: up, down, left, right
    const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    
    image[sr][sc] = color;
    
    while (queue.length) {
        const [r, c] = queue.shift();
        
        for (const [dr, dc] of dirs) {
            const newR = r + dr;
            const newC = c + dc;
            
            // Check bounds and if pixel matches original color
            if (newR >= 0 && newR < rows && 
                newC >= 0 && newC < cols && 
                image[newR][newC] === startColor) {
                
                image[newR][newC] = color;
                queue.push([newR, newC]);
            }
        }
    }
    
    return image;
};