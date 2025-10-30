function daysBetweenDates(date1: string, date2: string): number {
    const daysFrom1971 = (date: string): number => {
        const [year, month, day] = date.split('-').map(Number);
        
        const isLeapYear = (y: number): boolean => {
            return (y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0);
        };
        
        const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        
        let totalDays = 0;
        
        for (let y = 1971; y < year; y++) {
            totalDays += isLeapYear(y) ? 366 : 365;
        }
        
        for (let m = 1; m < month; m++) {
            if (m === 2 && isLeapYear(year)) {
                totalDays += 29;
            } else {
                totalDays += daysInMonth[m - 1];
            }
        }
        
        totalDays += day;
        
        return totalDays;
    };
    
    return Math.abs(daysFrom1971(date1) - daysFrom1971(date2));
}