arr = []
arr2 = [False for _ in range(201)]
remaining = 0

for i in range(0, 9):
    temp = int(input())
    arr.append(temp)
    arr2[temp] = True
    remaining += temp

arr.sort()
remaining -= 100

for i in arr:
    if i < remaining and arr2[remaining - i]:
        for j in arr:
            if j != i and j != remaining - i:
                print(j)
        quit()
        