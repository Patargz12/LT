function judgeCircle(moves: string): boolean {
    let upCount = 0;
    let rightCount = 0;
    
    for (const move of moves) {
        if (move === 'U') upCount++;
        else if (move === 'D') upCount--;
        else if (move === 'R') rightCount++;
        else if (move === 'L') rightCount--;
    }
    
    return upCount === 0 && rightCount === 0;
}