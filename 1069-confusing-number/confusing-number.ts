function confusingNumber(n: number): boolean {
  const rotate: { [key: string]: string } = {
    '0': '0',
    '1': '1',
    '6': '9',
    '8': '8',
    '9': '6'
  };
  
  const str = n.toString();
  let rotated = '';
  
  for (let i = str.length - 1; i >= 0; i--) {
    if (!(str[i] in rotate)) return false;
    rotated += rotate[str[i]];
  }
  
  return rotated !== str;
}