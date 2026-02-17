class Solution:
    def maxPower(self, s: str) -> int:
        max_power = count = 1
        for i in range(1, len(s)):
            count = count + 1 if s[i] == s[i-1] else 1
            max_power = max(max_power, count)
        return max_power