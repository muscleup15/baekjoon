s = input()
quacks = []
next = {"q": "u", "u": "a", "a": "c", "c": "k", "k": "q"}

for c in s:
    for i, quack in enumerate(quacks):
        if next[quack] == c:
            quacks[i] = c
            break
    else:
        if c == "q":
            quacks.append("q")
        else:
            print(-1)
            break
else:
    if all(c == "k" for c in quacks):
        print(len(quacks))
    else:
        print(-1)
