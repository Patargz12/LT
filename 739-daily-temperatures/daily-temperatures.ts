const dailyTemperatures = (temperatures: number[]): number[] => {
    const n = temperatures.length;
    const answer = new Array(n).fill(0);
    const stack: number[] = [];
    
    for (let i = 0; i < n; i++) {
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const idx = stack.pop()!;
            answer[idx] = i - idx;
        }
        stack.push(i);
    }
    
    return answer;
};