N = int(input())
M = N // 2

if N % 2 == 0:
    print(M**2 - M)
else:
    print(M**2)


# 1 2 3 4 5 6 7

# 1 2 3 4 5 7 6
# 1 2 3 4 7 6 5
# 1 2 3 7 6 5 4
# 3 1 2 7 6 5 4
# 3 2 1 7 6 5 4

# 1 + 2 + 3 + 2 + 1

# 1 2 3 4 5 6

# 1 2 3 4 6 5
# 1 2 3 6 5 4
# 3 1 2 6 5 4
# 3 2 1 6 5 4

# 1 + 2 + 2 + 1

# 1 2 3 4 5
# 1 2 3 5 4
# 1 2 5 4 3

# 1 + 2 + 1

# 1 2 3 4
# 1 2 4 3
# 2 1 4 3

# 1 + 1

# 1 2 3
# 1 3 2

# 1
