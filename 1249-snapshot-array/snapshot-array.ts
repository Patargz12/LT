class SnapshotArray {
    private data: Map<number, [number, number][]>[];
    private snapId: number;
    
    constructor(length: number) {
        this.data = new Array(length);
        for (let i = 0; i < length; i++) {
            this.data[i] = new Map();
            this.data[i].set(0, [[0, 0]]);
        }
        this.snapId = 0;
    }
    
    set(index: number, val: number): void {
        if (!this.data[index].has(this.snapId)) {
            this.data[index].set(this.snapId, []);
        }
        this.data[index].get(this.snapId)!.push([val, this.snapId]);
    }
    
    snap(): number {
        const currentSnapId = this.snapId;
        this.snapId++;
        return currentSnapId;
    }
    
    get(index: number, snapId: number): number {
        let result = 0;
        
        for (let sid = snapId; sid >= 0; sid--) {
            if (this.data[index].has(sid)) {
                const values = this.data[index].get(sid)!;
                if (values.length > 0) {
                    result = values[values.length - 1][0];
                    break;
                }
            }
        }
        
        return result;
    }
}