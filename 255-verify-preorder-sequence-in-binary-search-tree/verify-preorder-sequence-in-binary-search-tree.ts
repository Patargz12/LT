function verifyPreorder(preorder: number[]): boolean {
    const stack: number[] = [];
    let lowerBound = -Infinity;
    
    for (const val of preorder) {
        if (val < lowerBound) return false;
        
        while (stack.length > 0 && val > stack[stack.length - 1]) {
            lowerBound = stack.pop()!;
        }
        
        stack.push(val);
    }
    
    return true;
}