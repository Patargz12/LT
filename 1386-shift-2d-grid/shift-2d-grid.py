class Solution:
    def shiftGrid(self, grid: List[List[int]], k: int) -> List[List[int]]:
        m, n = len(grid), len(grid[0])
        total = m * n
        k %= total
        
        flat = []
        for row in grid:
            flat.extend(row)
        
        flat = flat[-k:] + flat[:-k]
        
        result = []
        for i in range(m):
            result.append(flat[i * n:(i + 1) * n])
        
        return result