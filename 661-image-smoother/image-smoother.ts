var imageSmoother = function(img) {
    const m = img.length;
    const n = img[0].length;
    const result = Array(m).fill(0).map(() => Array(n).fill(0));
    
    const directions = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1],  [0, 0],  [0, 1],
        [1, -1],  [1, 0],  [1, 1]
    ];
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let sum = 0;
            let count = 0;
            
            for (const [dx, dy] of directions) {
                const ni = i + dx;
                const nj = j + dy;
                
                if (ni >= 0 && ni < m && nj >= 0 && nj < n) {
                    sum += img[ni][nj];
                    count++;
                }
            }
            
            result[i][j] = Math.floor(sum / count);
        }
    }
    
    return result;
};