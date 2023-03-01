from itertools import combinations

N, M = map(int, input().split())
arr = input().split()
arr.sort()

vowels = set(["a", "e", "i", "o", "u"])

ans = ""

for i in combinations(range(M), N):
    vowelCnt = len([x for x in i if arr[x] in vowels])
    if vowelCnt < 1 or N - vowelCnt < 2:
        continue
    for j in i:
        ans += arr[j]
    ans += "\n"

print(ans)
