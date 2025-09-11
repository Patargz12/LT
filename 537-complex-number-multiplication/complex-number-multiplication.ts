function complexNumberMultiply(num1, num2) {
    const parse = (num) => {
        const match = num.match(/^(-?\d+)\+?(-?\d+)i$/);
        return [parseInt(match[1]), parseInt(match[2])];
    };
    
    const [a, b] = parse(num1);
    const [c, d] = parse(num2);
    
    const real = a * c - b * d;
    const imaginary = a * d + b * c;
    
    return `${real}+${imaginary}i`;
}