function highFive(items: number[][]): number[][] {
    const studentScores = new Map<number, number[]>();
    
    for (const [id, score] of items) {
        if (!studentScores.has(id)) {
            studentScores.set(id, []);
        }
        studentScores.get(id)!.push(score);
    }
    
    const result: number[][] = [];
    
    for (const [id, scores] of studentScores) {
        scores.sort((a, b) => b - a);
        const topFive = scores.slice(0, 5);
        const average = Math.floor(topFive.reduce((sum, score) => sum + score, 0) / 5);
        result.push([id, average]);
    }
    
    result.sort((a, b) => a[0] - b[0]);
    
    return result;
}