def gcd(n, m):
    return gcd(m, n % m) if n % m else m

def lcm(n, m):
    return n * m // gcd(n,m)

def solution(n, m):
    return [gcd(n,m), lcm(n,m)]