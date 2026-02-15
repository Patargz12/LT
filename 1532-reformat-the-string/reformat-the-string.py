class Solution:
    def reformat(self, s: str) -> str:
        letters = [c for c in s if c.isalpha()]
        digits = [c for c in s if c.isdigit()]
        
        if abs(len(letters) - len(digits)) > 1:
            return ""
        
        if len(letters) > len(digits):
            first, second = letters, digits
        else:
            first, second = digits, letters
        
        result = []
        for i in range(len(second)):
            result.append(first[i])
            result.append(second[i])
        
        if len(first) > len(second):
            result.append(first[-1])
        
        return "".join(result)