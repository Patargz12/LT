function totalMoney(n: number): number {
    const weeks = Math.floor(n / 7);
    const days = n % 7;
    const fullWeeks = weeks * 28 + 7 * weeks * (weeks - 1) / 2;
    const remaining = days * (weeks + 1) + days * (days - 1) / 2;
    return fullWeeks + remaining;
}