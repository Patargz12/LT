class Solution:
    def minCostToMoveChips(self, position: list[int]) -> int:
        odd = sum(p % 2 for p in position)
        even = len(position) - odd
        return min(odd, even)
