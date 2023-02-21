from itertools import product

N, M = map(int, input().split())
arr = [list(map(int, input().split())) for _ in range(N)]
checked = [[False] * M for _ in range(N)]


def group(n, m):
    if checked[n][m]:
        return []
    checked[n][m] = True
    ret = [(n, m)]
    for (dn, dm) in product([-1, 0, 1], repeat=2):
        n2 = n + dn
        m2 = m + dm
        if n2 in range(N) and m2 in range(M) and arr[n][m] == arr[n2][m2]:
            ret += group(n2, m2)
    return ret


def verify(cells):
    for (n, m) in cells:
        for (dn, dm) in product([-1, 0, 1], repeat=2):
            n2 = n + dn
            m2 = m + dm
            if n2 in range(N) and m2 in range(M) and arr[n][m] < arr[n2][m2]:
                return False
    return True


ans = 0

for n in range(N):
    for m in range(M):
        if not checked[n][m] and arr[n][m] != 0:
            temp = group(n, m)
            if verify(temp):
                ans += 1

print(ans)
