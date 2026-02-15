class Solution:
    def minSubsequence(self, nums: List[int]) -> List[int]:
        nums.sort(reverse=True)
        total = sum(nums)
        result = []
        current_sum = 0
        
        for num in nums:
            result.append(num)
            current_sum += num
            if current_sum > total - current_sum:
                break
        
        return result