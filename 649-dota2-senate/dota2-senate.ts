function predictPartyVictory(senate: string): string {
    const n = senate.length
    const radiant: number[] = []
    const dire: number[] = []

    for (let i = 0; i < n; i++) {
        if (senate[i] === 'R') radiant.push(i)
        else dire.push(i)
    }

    while (radiant.length && dire.length) {
        const r = radiant.shift()!
        const d = dire.shift()!
        if (r < d) radiant.push(r + n)
        else dire.push(d + n)
    }

    return radiant.length ? "Radiant" : "Dire"
}
