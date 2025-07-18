const searchMatrix = (matrix, target) => {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
        return false;
    }
    
    let row = 0;
    let col = matrix[0].length - 1;
    
    while (row < matrix.length && col >= 0) {
        if (matrix[row][col] === target) {
            return true;
        } else if (matrix[row][col] > target) {
            col--;
        } else {
            row++;
        }
    }
    
    return false;
};

const searchMatrixDivideConquer = (matrix, target) => {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
        return false;
    }
    
    const search = (top, left, bottom, right) => {
        if (top > bottom || left > right) {
            return false;
        }
        
        if (target < matrix[top][left] || target > matrix[bottom][right]) {
            return false;
        }
        
        const mid = left + Math.floor((right - left) / 2);
        let row = top;
        
        while (row <= bottom && matrix[row][mid] <= target) {
            if (matrix[row][mid] === target) {
                return true;
            }
            row++;
        }
        
        return search(row, left, bottom, mid - 1) || 
               search(top, mid + 1, row - 1, right);
    };
    
    return search(0, 0, matrix.length - 1, matrix[0].length - 1);
};