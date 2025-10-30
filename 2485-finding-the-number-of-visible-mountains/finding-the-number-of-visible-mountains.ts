function visibleMountains(peaks: number[][]): number {
    const arr = peaks.map(([x, y]) => [x - y, x + y]);
    arr.sort((a, b) => a[0] - b[0] || b[1] - a[1]);
    let res = 0, maxRight = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][1] > maxRight) {
            if (i + 1 < arr.length && arr[i][0] === arr[i + 1][0] && arr[i][1] === arr[i + 1][1]) {
                while (i + 1 < arr.length && arr[i][0] === arr[i + 1][0] && arr[i][1] === arr[i + 1][1]) i++;
            } else res++;
            maxRight = arr[i][1];
        }
    }
    return res;
}
