class Solution:
    def frequencySort(self, nums: list[int]) -> list[int]:
        freq = {}
        for n in nums:
            freq[n] = freq.get(n, 0) + 1
        return sorted(nums, key=lambda x: (freq[x], -x))