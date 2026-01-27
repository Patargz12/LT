function allCellsDistOrder(rows: number, cols: number, rCenter: number, cCenter: number): number[][] {
    const cells: number[][] = [];
    
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            cells.push([r, c]);
        }
    }
    
    cells.sort((a, b) => 
        Math.abs(a[0] - rCenter) + Math.abs(a[1] - cCenter) - 
        Math.abs(b[0] - rCenter) - Math.abs(b[1] - cCenter)
    );
    
    return cells;
}