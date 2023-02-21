N = int(input())
arr = [int(x) for x in input().split()]
ans = [None for _ in range(N)]


def solve(i, idx, taller):
    if taller == 0 and ans[idx] is None:
        ans[idx] = i + 1
    else:
        if ans[idx] is None:
            solve(i, idx + 1, taller - 1)
        else:
            solve(i, idx + 1, taller)


for i in range(N):
    solve(i, 0, arr[i])

print(" ".join([str(x) for x in ans]))
