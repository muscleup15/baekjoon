N, M = map(int, input().split())
src = [list(map(int, input())) for _ in range(N)]
dst = [list(map(int, input())) for _ in range(N)]


def swap(n, m):
    for i in range(3):
        for j in range(3):
            src[n + i][m + j] = 0 if src[n + i][m + j] == 1 else 1


if N < 3 or M < 3:
    for i in range(N):
        if src[i] != dst[i]:
            print(-1)
            break
    else:
        print(0)
else:
    cnt = 0
    for i in range(N - 2):
        for j in range(M - 2):
            if src[i][j] != dst[i][j]:
                swap(i, j)
                cnt += 1
    for i in range(N):
        if src[i] != dst[i]:
            print(-1)
            break
    else:
        print(cnt)
