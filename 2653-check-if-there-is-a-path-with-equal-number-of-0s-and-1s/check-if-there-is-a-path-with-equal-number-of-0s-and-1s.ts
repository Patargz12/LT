function isThereAPath(grid: number[][]): boolean {
    const m = grid.length;
    const n = grid[0].length;
    
    const totalCells = m + n - 1;
    if (totalCells % 2 !== 0) return false;
    
    const target = totalCells / 2;
    const memo = new Map<string, boolean>();
    
    function dfs(row: number, col: number, zeros: number): boolean {
        if (row >= m || col >= n) return false;
        
        const newZeros = zeros + (grid[row][col] === 0 ? 1 : 0);
        
        if (newZeros > target) return false;
        
        if (row === m - 1 && col === n - 1) {
            return newZeros === target;
        }
        
        const key = `${row},${col},${newZeros}`;
        if (memo.has(key)) return memo.get(key)!;
        
        const result = dfs(row + 1, col, newZeros) || dfs(row, col + 1, newZeros);
        
        memo.set(key, result);
        return result;
    }
    
    return dfs(0, 0, 0);
}