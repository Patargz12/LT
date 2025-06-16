/**
 * @param {number[]} heights
 * @return {number}
 */
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