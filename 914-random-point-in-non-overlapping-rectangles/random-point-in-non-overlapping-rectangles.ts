class Solution {
    private rects: number[][];
    private areas: number[];
    private totalArea: number;
    
    constructor(rects: number[][]) {
        this.rects = rects;
        this.areas = [];
        let totalArea = 0;
        
        for (const rect of rects) {
            const [x1, y1, x2, y2] = rect;
            const area = (x2 - x1 + 1) * (y2 - y1 + 1);
            totalArea += area;
            this.areas.push(totalArea);
        }
        
        this.totalArea = totalArea;
    }
    
    pick(): number[] {
        const target = Math.floor(Math.random() * this.totalArea);
        
        let left = 0, right = this.areas.length - 1;
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (this.areas[mid] <= target) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        
        const [x1, y1, x2, y2] = this.rects[left];
        const x = x1 + Math.floor(Math.random() * (x2 - x1 + 1));
        const y = y1 + Math.floor(Math.random() * (y2 - y1 + 1));
        
        return [x, y];
    }
}