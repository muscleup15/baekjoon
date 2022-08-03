from functools import reduce

input()
arr1 = sorted(list(map(int, input().split())))
arr2 = sorted(list(map(int, input().split())), reverse=True)

multiplied = map(lambda x, y: x*y, arr1, arr2)
added = reduce(lambda a, b: a+b, multiplied, 0)
print(added)
