function isRectangleOverlap(rec1: number[], rec2: number[]): boolean {
    const [x1, y1, x2, y2] = rec1;
    const [x3, y3, x4, y4] = rec2;
    
    return !(x2 <= x3 || x1 >= x4 || y2 <= y3 || y1 >= y4);
}