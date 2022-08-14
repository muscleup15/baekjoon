def findmax(arr, k, l):
    max_arr = sum(arr[0:k])
    last_arr = max_arr
    for i in range(k, l):
        last_arr = last_arr + arr[i] - arr[i-k]
        if max_arr < last_arr:
            max_arr = last_arr
    return max_arr

N, K = map(int, input().split()) # N 개의 숫자, K일
degrees = list(map(int, input().split()))
print(findmax(degrees, K, N))

