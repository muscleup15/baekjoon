import sys

input = sys.stdin.readline

N, M = map(int, input().split())

trie = dict()

for _ in range(N):
    word = input().rstrip()
    currentDict = trie
    for letter in word:
        currentDict = currentDict.setdefault(letter, {})

cnt = 0

for _ in range(M):
    word = input().rstrip()
    current_dict = trie
    for letter in word:
        if letter not in current_dict:
            break
        current_dict = current_dict[letter]
    else:
        cnt += 1

print(cnt)
