from collections import deque

n, k = map(int, input().split())
d = deque(range(1, n + 1))
result = []

for _ in range(n):
    d.rotate(1 - k)
    result.append(d.popleft())

print("<" + ", ".join(map(str, result)) + ">")
