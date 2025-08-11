function processStr(s: string, k: number): string {
    const ops: string[] = [];
    const lens: bigint[] = [];
    let len = 0n;
    for (const ch of s) {
        if (ch >= 'a' && ch <= 'z') {
            len += 1n;
            ops.push(ch);
        } else if (ch === '*') {
            if (len > 0n) len -= 1n;
            ops.push('*');
        } else if (ch === '#') {
            len = len * 2n;
            ops.push('#');
        } else if (ch === '%') {
            ops.push('%');
        }
        lens.push(len);
    }
    const total = lens.length ? lens[lens.length - 1] : 0n;
    const posInitial = BigInt(k);
    if (posInitial >= total) return '.';
    let pos = posInitial;
    for (let i = ops.length - 1; i >= 0; i--) {
        const op = ops[i];
        const lenCur = lens[i];
        const lenPrev = i > 0 ? lens[i - 1] : 0n;
        if (op === '#') {
            if (lenPrev > 0n) {
                if (pos >= lenPrev) pos -= lenPrev;
            }
        } else if (op === '%') {
            if (lenPrev > 0n) pos = lenPrev - 1n - pos;
        } else if (op === '*') {
            // no mapping needed; pos stays the same
        } else {
            if (pos === lenCur - 1n) return op;
        }
    }
    return '.';
}
