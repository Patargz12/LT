class Solution:
    def dayOfYear(self, date: str) -> int:
        year, month, day = map(int, date.split('-'))
        
        days_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        
        is_leap = (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0)
        
        if is_leap:
            days_in_month[1] = 29
        
        result = sum(days_in_month[:month - 1]) + day
        
        return result