N = int(input())
parents = list(map(int, input().split()))
deletedNode = int(input())

parentsNode = parents.index(-1)

childrens = [[] for _ in range(N)]
for node in range(N):
    parent = parents[node]
    if parent != -1:
        childrens[parent].append(node)

if parents[deletedNode] == -1:
    print(0)
else:
    childrens[parents[deletedNode]].remove(deletedNode)

    ans = 0

    def findLeaf(node):
        global ans
        if len(childrens[node]) == 0:
            ans += 1
        else:
            for child in childrens[node]:
                findLeaf(child)

    findLeaf(parentsNode)

    print(ans)
