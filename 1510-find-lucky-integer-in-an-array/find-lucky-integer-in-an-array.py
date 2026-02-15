class Solution:
    def findLucky(self, arr: List[int]) -> int:
        from collections import Counter
        freq = Counter(arr)
        lucky = [num for num in freq if freq[num] == num]
        return max(lucky) if lucky else -1