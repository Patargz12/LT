function fractionAddition(expression: string): string {
    const fractions = expression.match(/[+-]?\d+\/\d+/g) || []
    let numerator = 0, denominator = 1
    
    for (const frac of fractions) {
        const [numStr, denStr] = frac.split('/')
        const num = parseInt(numStr)
        const den = parseInt(denStr)
        numerator = numerator * den + num * denominator
        denominator *= den
        const g = gcd(Math.abs(numerator), denominator)
        numerator /= g
        denominator /= g
    }
    
    return numerator + '/' + denominator
}

function gcd(a: number, b: number): number {
    while (b !== 0) {
        const temp = a % b
        a = b
        b = temp
    }
    return a
}
