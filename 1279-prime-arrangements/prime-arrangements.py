class Solution:
    def numPrimeArrangements(self, n: int) -> int:
        MOD = 10**9 + 7
        
        def is_prime(num):
            if num < 2:
                return False
            if num == 2:
                return True
            if num % 2 == 0:
                return False
            for i in range(3, int(num**0.5) + 1, 2):
                if num % i == 0:
                    return False
            return True
        
        prime_count = 0
        for i in range(1, n + 1):
            if is_prime(i):
                prime_count += 1
        
        non_prime_count = n - prime_count
        
        def factorial(num):
            result = 1
            for i in range(1, num + 1):
                result = (result * i) % MOD
            return result
        
        return (factorial(prime_count) * factorial(non_prime_count)) % MOD