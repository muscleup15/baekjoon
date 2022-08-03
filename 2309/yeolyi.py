from functools import reduce

arr = []
for i in range(0, 9):
    arr.append(int(input()))

remaining = reduce(lambda a, b: a + b, arr, 0) - 100

for i in range(0, 8):
    for j in range(i + 1, 9):
        if arr[i] + arr[j] == remaining:
            for k in sorted(filter(lambda x: x != arr[i] and x != arr[j], arr)):
                print(k)
            quit()
