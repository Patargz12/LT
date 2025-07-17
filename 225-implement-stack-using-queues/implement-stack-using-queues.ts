class MyStack {
    private queue: number[];
    
    constructor() {
        this.queue = [];
    }
    
    push(x: number): void {
        this.queue.push(x);
        const size = this.queue.length;
        for (let i = 0; i < size - 1; i++) {
            this.queue.push(this.queue.shift()!);
        }
    }
    
    pop(): number {
        return this.queue.shift()!;
    }
    
    top(): number {
        return this.queue[0];
    }
    
    empty(): boolean {
        return this.queue.length === 0;
    }
}