function findKthLargest(nums: number[], k: number): number {
  const heap: number[] = []
  function push(x: number) {
    heap.push(x)
    let i = heap.length - 1
    while (i > 0) {
      const p = (i - 1) >> 1
      if (heap[p] <= heap[i]) break
      ;[heap[p], heap[i]] = [heap[i], heap[p]]
      i = p
    }
  }
  function pop() {
    const top = heap[0]
    const last = heap.pop()!
    if (heap.length) {
      heap[0] = last
      let i = 0
      const n = heap.length
      while (true) {
        let l = i * 2 + 1
        let r = i * 2 + 2
        let smallest = i
        if (l < n && heap[l] < heap[smallest]) smallest = l
        if (r < n && heap[r] < heap[smallest]) smallest = r
        if (smallest === i) break
        ;[heap[i], heap[smallest]] = [heap[smallest], heap[i]]
        i = smallest
      }
    }
    return top
  }
  for (const x of nums) {
    push(x)
    if (heap.length > k) pop()
  }
  return heap[0]
}
