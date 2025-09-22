function exclusiveTime(n: number, logs: string[]): number[] {
    const result = new Array(n).fill(0);
    const stack: number[] = [];
    let prevTime = 0;
    
    for (const log of logs) {
        const [id, type, time] = log.split(':');
        const funcId = parseInt(id);
        const timestamp = parseInt(time);
        
        if (type === 'start') {
            if (stack.length > 0) {
                result[stack[stack.length - 1]] += timestamp - prevTime;
            }
            stack.push(funcId);
            prevTime = timestamp;
        } else {
            const currentFunc = stack.pop()!;
            result[currentFunc] += timestamp - prevTime + 1;
            prevTime = timestamp + 1;
        }
    }
    
    return result;
}