const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const V = +input[0].split(" ")[2];
const graph = {};
input.slice(1).forEach((x) => {
    const [from, to] = x.split(" ").map(Number);
    if (graph[from] === undefined) {
        graph[from] = [];
    }
    graph[from] = [...graph[from], to];
    if (graph[to] === undefined) {
        graph[to] = [];
    }
    graph[to] = [...graph[to], from];
});
Object.values(graph).forEach((x) => x.sort((a, b) => a - b));

const dfs = (() => {
    const visited = new Set();
    let result = "";
    const _dfs = (node) => {
        result += `${node} `;
        visited.add(node);
        for (const edge of graph[node] ?? []) {
            if (!visited.has(edge)) {
                _dfs(edge);
            }
        }
    };
    return (V) => {
        _dfs(V);
        console.log(result);
    };
})();

function bfs(V) {
    const visited = new Set([V]);
    const queue = [V];
    let head = 0;
    let result = "";
    while (head < queue.length) {
        const node = queue[head++];
        result += `${node} `;
        for (const edge of graph[node] ?? []) {
            if (!visited.has(edge)) {
                queue.push(edge);
                visited.add(edge);
            }
        }
    }
    console.log(result);
}

dfs(V);
bfs(V);
