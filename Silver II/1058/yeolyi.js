const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0];
const arr = input.slice(1).map(x => {
    const temp = [...x];
    return temp.map(x => x === 'Y');
})

// DFS로 풀면 A -> B -> C의 경로가 있더라도 A -> D -> B등으로 B를 먼저 visit한 경우 C의 탐색이 이루어지지 않을 수도 있다. 
let cnt = 0;

for (const i of Array(N).keys()) {
    const visited = Array(N).fill(false);
    visited[i] = true;
    for (const j of Array(N).keys()) {
        if (!arr[i][j]) { continue; }
        visited[j] = true
        for (const k of Array(N).keys()) {
            if (!arr[j][k]) { continue; }
            visited[k] = true
        }
    }
    cnt = Math.max(cnt, visited.filter(x => x).length - 1);
    // const visited = Array(N).fill(false);
    // visited[i] = true;
    // const next = [...Array(N).keys()].filter(x => arr[i][x]);
    // for (const j of next) {
    //     visited[j] = true;
    //     const nextnext = [...Array(N).keys()].filter(x => arr[j][x]);
    //     for (const k in nextnext) {
    //         visited[k] = true;
    //     }
    // }
    // cnt = Math.max(cnt, visited.filter(x => x).length - 1);
}

console.log(cnt);

