function candyCrush(board) {
    const m = board.length;
    const n = board[0].length;
    let changed = true;
    
    while (changed) {
        changed = false;
        
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (board[i][j] === 0) continue;
                
                const val = Math.abs(board[i][j]);
                
                if (j + 2 < n && Math.abs(board[i][j + 1]) === val && Math.abs(board[i][j + 2]) === val) {
                    board[i][j] = -val;
                    board[i][j + 1] = -val;
                    board[i][j + 2] = -val;
                    changed = true;
                }
                
                if (i + 2 < m && Math.abs(board[i + 1][j]) === val && Math.abs(board[i + 2][j]) === val) {
                    board[i][j] = -val;
                    board[i + 1][j] = -val;
                    board[i + 2][j] = -val;
                    changed = true;
                }
            }
        }
        
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (board[i][j] < 0) {
                    board[i][j] = 0;
                }
            }
        }
        
        for (let j = 0; j < n; j++) {
            let writeRow = m - 1;
            for (let i = m - 1; i >= 0; i--) {
                if (board[i][j] > 0) {
                    board[writeRow][j] = board[i][j];
                    if (writeRow !== i) {
                        board[i][j] = 0;
                    }
                    writeRow--;
                }
            }
        }
    }
    
    return board;
}