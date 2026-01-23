function numRookCaptures(board: string[][]): number {
    let rRow = 0, rCol = 0;
    
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (board[i][j] === 'R') {
                rRow = i;
                rCol = j;
                break;
            }
        }
    }
    
    let captures = 0;
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    
    for (const [dr, dc] of directions) {
        let r = rRow + dr, c = rCol + dc;
        while (r >= 0 && r < 8 && c >= 0 && c < 8) {
            if (board[r][c] === 'B') break;
            if (board[r][c] === 'p') {
                captures++;
                break;
            }
            r += dr;
            c += dc;
        }
    }
    
    return captures;
}