function matrixReshape(mat: number[][], r: number, c: number): number[][] {
    const m = mat.length
    const n = mat[0].length
    if (m * n !== r * c) return mat

    const res: number[][] = Array.from({ length: r }, () => Array(c).fill(0))
    let flat = mat.flat()

    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            res[i][j] = flat[i * c + j]
        }
    }

    return res
}
