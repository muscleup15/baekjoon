from calendar import c


N = int(input())
arr = []
for i in range(N):
    arr.append(list(map(int, input().split(' '))))

cache = {}

def solve(start):
    if start in cache:
        return cache[start]
    if N <= start:
        return 0
    ret = 0
    for i in range(start, N):
        length = arr[i][0]
        nextDay = i + length
        if N < nextDay:
            continue
        cost = arr[i][1]
        val = cost + solve(nextDay)
        ret = max(ret, val)
    cache[start] = ret
    return ret

print(solve(0))
