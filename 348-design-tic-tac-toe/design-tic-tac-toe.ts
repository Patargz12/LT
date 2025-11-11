function TicTacToe(n) {
    this.rows = new Array(n).fill(0);
    this.cols = new Array(n).fill(0);
    this.diag = 0;
    this.antiDiag = 0;
    this.n = n;
}

TicTacToe.prototype.move = function(row, col, player) {
    const val = player === 1 ? 1 : -1;
    
    this.rows[row] += val;
    this.cols[col] += val;
    
    if (row === col) {
        this.diag += val;
    }
    
    if (row + col === this.n - 1) {
        this.antiDiag += val;
    }
    
    if (Math.abs(this.rows[row]) === this.n || 
        Math.abs(this.cols[col]) === this.n || 
        Math.abs(this.diag) === this.n || 
        Math.abs(this.antiDiag) === this.n) {
        return player;
    }
    
    return 0;
};