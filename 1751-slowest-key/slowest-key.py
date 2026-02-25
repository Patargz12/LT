class Solution:
    def slowestKey(self, releaseTimes: list[int], keysPressed: str) -> str:
        res = keysPressed[0]
        maxDur = releaseTimes[0]
        for i in range(1, len(releaseTimes)):
            dur = releaseTimes[i] - releaseTimes[i - 1]
            if dur > maxDur or (dur == maxDur and keysPressed[i] > res):
                res = keysPressed[i]
                maxDur = dur
        return res