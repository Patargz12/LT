function countGoodRectangles(rectangles: number[][]): number {
    let maxLen = 0;
    let count = 0;

    for (const [l, w] of rectangles) {
        const side = Math.min(l, w);
        if (side > maxLen) {
            maxLen = side;
            count = 1;
        } else if (side === maxLen) {
            count++;
        }
    }

    return count;
}