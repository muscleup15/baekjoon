import sys

input = sys.stdin.readline

N = int(input())
arr = []


def parent(i):
    p = (i - 1) // 2
    return p if 0 < i else i


def left(i):
    l = 2 * i + 1
    return l if l < len(arr) else i


def right(i):
    r = 2 * i + 2
    return r if r < len(arr) else i


def heapifyUp(c):
    p = parent(c)
    if arr[c] < arr[p]:
        arr[c], arr[p] = arr[p], arr[c]
        heapifyUp(p)


def heapifyDown(p):
    l, r = left(p), right(p)
    c = r if arr[r] < arr[l] else l
    if arr[c] < arr[p]:
        arr[c], arr[p] = arr[p], arr[c]
        heapifyDown(c)


ans = []

for _ in range(N):
    x = int(input())
    n = len(arr)

    if x == 0:
        if n == 0:
            ans.append("0")
        else:
            ans.append(str(arr[0]))
            # 안된다,,,^^
            # arr[0] = arr.pop()
            arr[0], arr[n - 1] = arr[n - 1], arr[0]
            arr.pop()
            if len(arr) != 0:
                heapifyDown(0)
    else:
        arr.append(x)
        heapifyUp(n)

print("\n".join(ans))
