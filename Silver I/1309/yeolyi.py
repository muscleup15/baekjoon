N = int(input())


memoLeftRight = [None] * N
memoNone = [None] * N

memoLeftRight[0] = 1
memoNone[0] = 1

for i in range(1, N):
    memoLeftRight[i] = (memoNone[i - 1] + memoLeftRight[i - 1]) % 9901
    memoNone[i] = (memoNone[i - 1] + 2 * memoLeftRight[i - 1]) % 9901

print((2 * memoLeftRight[N - 1] + memoNone[N - 1]) % 9901)
