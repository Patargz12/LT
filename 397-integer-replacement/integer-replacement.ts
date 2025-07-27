
function integerReplacement(n) {
    let steps = 0;
    
    while (n !== 1) {
        if (n % 2 === 0) {
            n = n / 2;
        } else {
            if (n === 3 || ((n - 1) / 2) % 2 === 0) {
                n = n - 1;
            } else {
                n = n + 1;
            }
        }
        steps++;
    }
    
    return steps;
}