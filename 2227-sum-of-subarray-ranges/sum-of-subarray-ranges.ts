function subArrayRanges(nums: number[]): number {
  const n = nums.length;
  
  const sumMax = (arr: number[]): number => {
    const left = new Array(n).fill(-1);
    const right = new Array(n).fill(n);
    const stack: number[] = [];
    
    for (let i = 0; i < n; i++) {
      while (stack.length && arr[stack[stack.length - 1]] < arr[i]) {
        stack.pop();
      }
      if (stack.length) left[i] = stack[stack.length - 1];
      stack.push(i);
    }
    
    stack.length = 0;
    
    for (let i = n - 1; i >= 0; i--) {
      while (stack.length && arr[stack[stack.length - 1]] <= arr[i]) {
        stack.pop();
      }
      if (stack.length) right[i] = stack[stack.length - 1];
      stack.push(i);
    }
    
    let total = 0;
    for (let i = 0; i < n; i++) {
      total += arr[i] * (i - left[i]) * (right[i] - i);
    }
    return total;
  };
  
  const sumMin = (arr: number[]): number => {
    const left = new Array(n).fill(-1);
    const right = new Array(n).fill(n);
    const stack: number[] = [];
    
    for (let i = 0; i < n; i++) {
      while (stack.length && arr[stack[stack.length - 1]] > arr[i]) {
        stack.pop();
      }
      if (stack.length) left[i] = stack[stack.length - 1];
      stack.push(i);
    }
    
    stack.length = 0;
    
    for (let i = n - 1; i >= 0; i--) {
      while (stack.length && arr[stack[stack.length - 1]] >= arr[i]) {
        stack.pop();
      }
      if (stack.length) right[i] = stack[stack.length - 1];
      stack.push(i);
    }
    
    let total = 0;
    for (let i = 0; i < n; i++) {
      total += arr[i] * (i - left[i]) * (right[i] - i);
    }
    return total;
  };
  
  return sumMax(nums) - sumMin(nums);
}