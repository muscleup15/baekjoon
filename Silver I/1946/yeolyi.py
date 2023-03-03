import sys

input = sys.stdin.readline

T = int(input().rstrip())

for _ in range(T):
    N = int(input().rstrip())
    arr = [tuple(map(int, input().rstrip().split())) for _ in range(N)]
    arr.sort()

    ans = 0
    minVal2 = arr[0][1]
    for _, val2 in arr:
        if val2 <= minVal2:
            ans += 1
            minVal2 = val2

    print(ans)
