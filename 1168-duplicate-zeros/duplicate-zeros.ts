function duplicateZeros(arr: number[]): void {
    const n = arr.length;
    let zeros = 0;
    let i = 0;
    
    while (i + zeros < n) {
        if (arr[i] === 0) zeros++;
        i++;
    }
    i--;
    
    let j = n - 1;
    
    if (i + zeros > n - 1) {
        arr[j--] = 0;
        i--;
        zeros--;
    }
    
    while (j >= 0) {
        arr[j--] = arr[i];
        if (arr[i] === 0) arr[j--] = 0;
        i--;
    }
}