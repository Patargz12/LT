class Solution:
    def trimMean(self, arr: list[int]) -> float:
        arr.sort()
        trim = len(arr) // 20
        trimmed = arr[trim:len(arr) - trim]
        return sum(trimmed) / len(trimmed)