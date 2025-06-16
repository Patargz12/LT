/**
 * @param {character[][]} matrix
 * @return {number}
 */
const maximalRectangle = (matrix) => {
    if (!matrix.length || !matrix[0].length) return 0;
    
    const rows = matrix.length;
    const cols = matrix[0].length;
    const heights = new Array(cols).fill(0);
    let maxArea = 0;
    
    for (let i = 0; i < rows; i++) {
        // Update heights array for current row
        for (let j = 0; j < cols; j++) {
            heights[j] = matrix[i][j] === '1' ? heights[j] + 1 : 0;
        }
        
        // Find largest rectangle in histogram for current heights
        maxArea = Math.max(maxArea, largestRectangleArea(heights));
    }
    
    return maxArea;
};

const largestRectangleArea = (heights) => {
    const stack = [];
    let maxArea = 0;
    
    for (let i = 0; i <= heights.length; i++) {
        const currentHeight = i === heights.length ? 0 : heights[i];
        
        while (stack.length && heights[stack[stack.length - 1]] > currentHeight) {
            const height = heights[stack.pop()];
            const width = stack.length ? i - stack[stack.length - 1] - 1 : i;
            maxArea = Math.max(maxArea, height * width);
        }
        
        stack.push(i);
    }
    
    return maxArea;
};