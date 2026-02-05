class Solution:
    def dayOfTheWeek(self, day: int, month: int, year: int) -> str:
        days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        
        total_days = 0
        
        for y in range(1971, year):
            if self.is_leap_year(y):
                total_days += 366
            else:
                total_days += 365
        
        days_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        if self.is_leap_year(year):
            days_in_month[1] = 29
        
        for m in range(month - 1):
            total_days += days_in_month[m]
        
        total_days += day - 1
        
        day_index = (5 + total_days) % 7
        
        return days[day_index]
    
    def is_leap_year(self, year: int) -> bool:
        return (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0)