function countStudents(students: number[], sandwiches: number[]): number {
    const count = [0, 0];
    for (const s of students) count[s]++;
    
    for (const s of sandwiches) {
        if (count[s] === 0) return count[1 - s];
        count[s]--;
    }
    
    return 0;
}