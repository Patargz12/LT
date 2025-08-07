class Node {
    count: number;
    keys: Set<string>;
    prev: Node | null;
    next: Node | null;
    
    constructor(count: number) {
        this.count = count;
        this.keys = new Set();
        this.prev = null;
        this.next = null;
    }
}

class AllOne {
    private keyToNode: Map<string, Node>;
    private head: Node;
    private tail: Node;
    
    constructor() {
        this.keyToNode = new Map();
        this.head = new Node(0);
        this.tail = new Node(0);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }
    
    private addNodeAfter(prevNode: Node, count: number): Node {
        const newNode = new Node(count);
        newNode.next = prevNode.next;
        newNode.prev = prevNode;
        prevNode.next!.prev = newNode;
        prevNode.next = newNode;
        return newNode;
    }
    
    private removeNode(node: Node): void {
        node.prev!.next = node.next;
        node.next!.prev = node.prev;
    }
    
    inc(key: string): void {
        if (this.keyToNode.has(key)) {
            const currentNode = this.keyToNode.get(key);
            const newCount = currentNode.count + 1;
            
            let nextNode = currentNode.next;
            if (nextNode === this.tail || nextNode.count !== newCount) {
                nextNode = this.addNodeAfter(currentNode, newCount);
            }
            
            nextNode.keys.add(key);
            this.keyToNode.set(key, nextNode);
            
            currentNode.keys.delete(key);
            if (currentNode.keys.size === 0) {
                this.removeNode(currentNode);
            }
        } else {
            let firstNode = this.head.next;
            if (firstNode === this.tail || firstNode.count !== 1) {
                firstNode = this.addNodeAfter(this.head, 1);
            }
            
            firstNode.keys.add(key);
            this.keyToNode.set(key, firstNode);
        }
    }
    
    dec(key: string): void {
        const currentNode = this.keyToNode.get(key);
        
        if (currentNode.count === 1) {
            this.keyToNode.delete(key);
        } else {
            const newCount = currentNode.count - 1;
            
            let prevNode = currentNode.prev;
            if (prevNode === this.head || prevNode.count !== newCount) {
                prevNode = this.addNodeAfter(currentNode.prev, newCount);
            }
            
            prevNode.keys.add(key);
            this.keyToNode.set(key, prevNode);
        }
        
        currentNode.keys.delete(key);
        if (currentNode.keys.size === 0) {
            this.removeNode(currentNode);
        }
    }
    
    getMaxKey(): string {
        if (this.tail.prev === this.head) return "";
        return this.tail.prev.keys.values().next().value;
    }
    
    getMinKey(): string {
        if (this.head.next === this.tail) return "";
        return this.head.next.keys.values().next().value;
    }
}