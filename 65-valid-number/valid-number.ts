function isNumber(s: string): boolean {
  let i = 0;
  const n = s.length;
  
  if (i < n && (s[i] === '+' || s[i] === '-')) {
    i++;
  }
  
  let hasDigits = false;
  let hasDot = false;
  
  while (i < n && (s[i] >= '0' && s[i] <= '9' || s[i] === '.')) {
    if (s[i] === '.') {
      if (hasDot) return false;
      hasDot = true;
    } else {
      hasDigits = true;
    }
    i++;
  }
  
  if (!hasDigits) return false;
  
  if (i < n && (s[i] === 'e' || s[i] === 'E')) {
    i++;
    
    if (i < n && (s[i] === '+' || s[i] === '-')) {
      i++;
    }
    
    let hasExponentDigits = false;
    while (i < n && s[i] >= '0' && s[i] <= '9') {
      hasExponentDigits = true;
      i++;
    }
    
    if (!hasExponentDigits) return false;
  }
  
  return i === n;
}