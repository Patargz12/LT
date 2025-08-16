const findCircleNum = (isConnected) => {
    const n = isConnected.length;
    const visited = new Array(n).fill(false);
    let provinces = 0;
    
    const dfs = (city) => {
        visited[city] = true;
        for (let i = 0; i < n; i++) {
            if (isConnected[city][i] === 1 && !visited[i]) {
                dfs(i);
            }
        }
    };
    
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            dfs(i);
            provinces++;
        }
    }
    
    return provinces;
};