function countBalls(lowLimit: number, highLimit: number): number {
    const boxes = new Map<number, number>();
    let max = 0;

    for (let i = lowLimit; i <= highLimit; i++) {
        let sum = 0;
        let n = i;
        while (n > 0) {
            sum += n % 10;
            n = Math.floor(n / 10);
        }
        const count = (boxes.get(sum) ?? 0) + 1;
        boxes.set(sum, count);
        if (count > max) max = count;
    }

    return max;
}