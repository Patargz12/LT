function validSquare(p1: number[], p2: number[], p3: number[], p4: number[]): boolean {
    function dist(a: number[], b: number[]): number {
        return (a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2
    }

    const points = [p1, p2, p3, p4]
    const dists: number[] = []

    for (let i = 0; i < 4; i++) {
        for (let j = i + 1; j < 4; j++) {
            dists.push(dist(points[i], points[j]))
        }
    }

    dists.sort((a, b) => a - b)

    return dists[0] > 0 &&
           dists[0] === dists[1] &&
           dists[1] === dists[2] &&
           dists[2] === dists[3] &&
           dists[4] === dists[5] &&
           dists[4] === 2 * dists[0]
}
