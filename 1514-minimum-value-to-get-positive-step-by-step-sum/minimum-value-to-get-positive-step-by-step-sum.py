class Solution:
    def minStartValue(self, nums: List[int]) -> int:
        running_sum = 0
        min_sum = 0
        
        for num in nums:
            running_sum += num
            min_sum = min(min_sum, running_sum)
        
        return 1 - min_sum