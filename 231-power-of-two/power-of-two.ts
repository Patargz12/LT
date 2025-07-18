
const isPowerOfTwo = (n) => {
    return n > 0 && (n & (n - 1)) === 0;
};

const isPowerOfTwoAlternative = (n) => {
    return n > 0 && (n & -n) === n;
};

const isPowerOfTwoBasic = (n) => {
    if (n <= 0) return false;
    while (n % 2 === 0) {
        n /= 2;
    }
    return n === 1;
};