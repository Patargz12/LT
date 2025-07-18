class MyQueue {
    private inStack: number[] = [];
    private outStack: number[] = [];
    
    push(x: number): void {
        this.inStack.push(x);
    }
    
    pop(): number {
        this.peek();
        return this.outStack.pop()!;
    }
    
    peek(): number {
        if (this.outStack.length === 0) {
            while (this.inStack.length > 0) {
                this.outStack.push(this.inStack.pop()!);
            }
        }
        return this.outStack[this.outStack.length - 1];
    }
    
    empty(): boolean {
        return this.inStack.length === 0 && this.outStack.length === 0;
    }
}