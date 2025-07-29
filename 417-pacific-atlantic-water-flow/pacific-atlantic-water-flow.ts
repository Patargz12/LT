const pacificAtlantic = (heights) => {
    const m = heights.length;
    const n = heights[0].length;
    
    const pacific = Array(m).fill(null).map(() => Array(n).fill(false));
    const atlantic = Array(m).fill(null).map(() => Array(n).fill(false));
    
    const dfs = (r, c, ocean, prevHeight) => {
        if (r < 0 || r >= m || c < 0 || c >= n || ocean[r][c] || heights[r][c] < prevHeight) {
            return;
        }
        
        ocean[r][c] = true;
        
        dfs(r + 1, c, ocean, heights[r][c]);
        dfs(r - 1, c, ocean, heights[r][c]);
        dfs(r, c + 1, ocean, heights[r][c]);
        dfs(r, c - 1, ocean, heights[r][c]);
    };
    
    for (let i = 0; i < m; i++) {
        dfs(i, 0, pacific, 0);
        dfs(i, n - 1, atlantic, 0);
    }
    
    for (let j = 0; j < n; j++) {
        dfs(0, j, pacific, 0);
        dfs(m - 1, j, atlantic, 0);
    }
    
    const result = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (pacific[i][j] && atlantic[i][j]) {
                result.push([i, j]);
            }
        }
    }
    
    return result;
};