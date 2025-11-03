function calculate(s: string): number {
    let i = 0
    function helper(): number {
        const stack: number[] = []
        let num = 0, sign = '+'
        while (i < s.length) {
            const c = s[i++]
            if (c === ' ') continue
            if (c >= '0' && c <= '9') num = num * 10 + Number(c)
            if (c === '(') num = helper()
            if (isNaN(Number(c)) || i === s.length) {
                if (sign === '+') stack.push(num)
                else if (sign === '-') stack.push(-num)
                else if (sign === '*') stack.push(stack.pop()! * num)
                else if (sign === '/') stack.push((stack.pop()! / num) | 0)
                sign = c
                num = 0
            }
            if (c === ')') break
        }
        return stack.reduce((a, b) => a + b, 0)
    }
    return helper()
}
