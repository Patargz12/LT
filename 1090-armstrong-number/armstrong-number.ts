function isArmstrong(n: number): boolean {
    const digits = n.toString().split('').map(Number);
    const k = digits.length;
    const sum = digits.reduce((acc, digit) => acc + Math.pow(digit, k), 0);
    return sum === n;
}