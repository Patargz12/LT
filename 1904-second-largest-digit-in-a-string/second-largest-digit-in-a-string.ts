function secondHighest(s: string): number {
    let first = -1, second = -1;
    for (const c of s) {
        const d = c.charCodeAt(0) - 48;
        if (d < 0 || d > 9) continue;
        if (d > first) { second = first; first = d; }
        else if (d > second && d < first) second = d;
    }
    return second;
}