class Solution:
    def destCity(self, paths: List[List[str]]) -> str:
        sources = {a for a, b in paths}
        return next(b for a, b in paths if b not in sources)