class Solution {
    prefix: number[]
    total: number

    constructor(w: number[]) {
        this.prefix = []
        let sum = 0
        for (let weight of w) {
            sum += weight
            this.prefix.push(sum)
        }
        this.total = sum
    }

    pickIndex(): number {
        let target = Math.floor(Math.random() * this.total) + 1
        let left = 0, right = this.prefix.length - 1
        while (left < right) {
            let mid = Math.floor((left + right) / 2)
            if (this.prefix[mid] < target) {
                left = mid + 1
            } else {
                right = mid
            }
        }
        return left
    }
}
