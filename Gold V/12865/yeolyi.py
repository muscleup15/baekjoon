N, K = map(int, input().split())
arr = [tuple(map(int, input().split())) for _ in range(N)]
arr.sort(key=lambda x: x[1], reverse=True)

cache = dict()


def solve(idx, weight):
    if idx == N:
        return 0

    key = weight * 1000 + idx
    if key in cache:
        return cache[key]

    target = arr[idx]
    ret = solve(idx + 1, weight)
    if weight + target[0] <= K:
        ret = max(ret, solve(idx + 1, weight + target[0]) + target[1])
    cache[key] = ret
    return ret


print(solve(0, 0))
