function computeArea(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
    const area1 = (ax2 - ax1) * (ay2 - ay1);
    const area2 = (bx2 - bx1) * (by2 - by1);
    
    const overlapLeft = Math.max(ax1, bx1);
    const overlapRight = Math.min(ax2, bx2);
    const overlapBottom = Math.max(ay1, by1);
    const overlapTop = Math.min(ay2, by2);
    
    let overlapArea = 0;
    if (overlapLeft < overlapRight && overlapBottom < overlapTop) {
        overlapArea = (overlapRight - overlapLeft) * (overlapTop - overlapBottom);
    }
    
    return area1 + area2 - overlapArea;
}