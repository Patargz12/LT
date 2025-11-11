function MaxStack() {
    type Node = { val: number; prev: Node | null; next: Node | null }
    const head: Node = { val: 0, prev: null, next: null }
    const tail: Node = { val: 0, prev: null, next: null }
    head.next = tail
    tail.prev = head
    const valMap = new Map<number, Node[]>()
    const heap: number[] = []

    const pushHeap = (v: number) => {
        heap.push(v)
        let i = heap.length - 1
        while (i > 0) {
            const p = (i - 1) >> 1
            if (heap[i] <= heap[p]) break
            const t = heap[i]; heap[i] = heap[p]; heap[p] = t
            i = p
        }
    }

    const popHeapTop = (): number | undefined => {
        if (!heap.length) return undefined
        const top = heap[0]
        const last = heap.pop()!
        if (heap.length) {
            heap[0] = last
            let i = 0
            while (true) {
                let l = i * 2 + 1, r = i * 2 + 2, m = i
                if (l < heap.length && heap[l] > heap[m]) m = l
                if (r < heap.length && heap[r] > heap[m]) m = r
                if (m === i) break
                const t = heap[i]; heap[i] = heap[m]; heap[m] = t
                i = m
            }
        }
        return top
    }

    const cleanHeapTop = () => {
        while (heap.length) {
            const v = heap[0]
            const arr = valMap.get(v)
            if (!arr || arr.length === 0) {
                popHeapTop()
                continue
            }
            break
        }
    }

    const removeNode = (node: Node) => {
        node.prev!.next = node.next
        node.next!.prev = node.prev
    }

    const push = (x: number): void => {
        const node: Node = { val: x, prev: tail.prev, next: tail }
        tail.prev!.next = node
        tail.prev = node
        if (!valMap.has(x)) valMap.set(x, [])
        valMap.get(x)!.push(node)
        pushHeap(x)
    }

    const pop = (): number => {
        const node = tail.prev!
        removeNode(node)
        const arr = valMap.get(node.val)!
        arr.pop()
        if (arr.length === 0) valMap.delete(node.val)
        return node.val
    }

    const top = (): number => {
        return tail.prev!.val
    }

    const peekMax = (): number => {
        cleanHeapTop()
        return heap[0]
    }

    const popMax = (): number => {
        cleanHeapTop()
        const vmax = heap[0]
        const arr = valMap.get(vmax)!
        const node = arr.pop()!
        removeNode(node)
        if (arr.length === 0) valMap.delete(vmax)
        cleanHeapTop()
        return vmax
    }

    return { push, pop, top, peekMax, popMax }
}
