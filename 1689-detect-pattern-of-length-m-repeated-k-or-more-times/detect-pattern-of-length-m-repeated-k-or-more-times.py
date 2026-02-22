class Solution:
    def containsPattern(self, arr: List[int], m: int, k: int) -> bool:
        for i in range(len(arr) - m * k + 1):
            if all(arr[i + j] == arr[i + j % m] for j in range(m * k)):
                return True
        return False