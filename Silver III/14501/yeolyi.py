N = int(input())
arr = []
for i in range(N):
    arr.append(list(map(int, input().split(" "))))
ret = [0 for _ in range(N + 1)]

for i in reversed(range(N)):
    days = arr[i][0]
    cost = arr[i][1]
    available = i + days <= N
    if available:
        ret[i] = max(ret[i + 1], cost + ret[i + days])
    else:
        ret[i] = ret[i + 1]

print(ret[0])
