function updateBoard(board: string[][], click: number[]): string[][] {
    const [m, n] = [board.length, board[0].length]
    const dirs = [[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]

    function countMines(r: number, c: number): number {
        let count = 0
        for (const [dr, dc] of dirs) {
            const nr = r + dr, nc = c + dc
            if (nr >= 0 && nr < m && nc >= 0 && nc < n && board[nr][nc] === 'M') {
                count++
            }
        }
        return count
    }

    function dfs(r: number, c: number) {
        if (r < 0 || r >= m || c < 0 || c >= n || board[r][c] !== 'E') return
        const mines = countMines(r, c)
        if (mines > 0) {
            board[r][c] = mines.toString()
        } else {
            board[r][c] = 'B'
            for (const [dr, dc] of dirs) {
                dfs(r + dr, c + dc)
            }
        }
    }

    const [cr, cc] = click
    if (board[cr][cc] === 'M') {
        board[cr][cc] = 'X'
    } else {
        dfs(cr, cc)
    }
    return board
}
