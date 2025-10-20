function myAtoi(s: string): number {
  const MIN = -Math.pow(2, 31);
  const MAX = Math.pow(2, 31) - 1;
  
  let i = 0;
  
  while (i < s.length && s[i] === ' ') {
    i++;
  }
  
  let sign = 1;
  if (i < s.length && (s[i] === '+' || s[i] === '-')) {
    sign = s[i] === '-' ? -1 : 1;
    i++;
  }
  
  let result = 0;
  while (i < s.length && s[i] >= '0' && s[i] <= '9') {
    result = result * 10 + (s[i].charCodeAt(0) - '0'.charCodeAt(0));
    
    if (sign * result < MIN) return MIN;
    if (sign * result > MAX) return MAX;
    
    i++;
  }
  
  return sign * result;
}