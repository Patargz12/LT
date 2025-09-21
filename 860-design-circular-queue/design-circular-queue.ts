class MyCircularQueue {
    private queue: number[]
    private head: number
    private tail: number
    private size: number
    private capacity: number

    constructor(k: number) {
        this.queue = new Array(k)
        this.head = -1
        this.tail = -1
        this.size = 0
        this.capacity = k
    }

    enQueue(value: number): boolean {
        if (this.isFull()) return false
        if (this.isEmpty()) this.head = 0
        this.tail = (this.tail + 1) % this.capacity
        this.queue[this.tail] = value
        this.size++
        return true
    }

    deQueue(): boolean {
        if (this.isEmpty()) return false
        if (this.head === this.tail) {
            this.head = -1
            this.tail = -1
        } else {
            this.head = (this.head + 1) % this.capacity
        }
        this.size--
        return true
    }

    Front(): number {
        return this.isEmpty() ? -1 : this.queue[this.head]
    }

    Rear(): number {
        return this.isEmpty() ? -1 : this.queue[this.tail]
    }

    isEmpty(): boolean {
        return this.size === 0
    }

    isFull(): boolean {
        return this.size === this.capacity
    }
}
