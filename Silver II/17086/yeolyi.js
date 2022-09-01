const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const arr = input
    .slice(1)
    .map((x) => x.split(" ").map((x) => (x === "1" ? -1 : 10000)));
const d = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
    [1, 1],
    [-1, 1],
    [1, -1],
    [-1, -1],
];

for (const n of Array(N).keys()) {
    for (const m of Array(M).keys()) {
        if (arr[n][m] === -1) {
            solve(m, n, 1);
        }
    }
}
console.log(Math.max(...arr.reduce((a, b) => [...a, ...b])));

function solve(m, n, distance) {
    for (const [dm, dn] of d) {
        const m2 = m + dm;
        const n2 = n + dn;
        if (m2 < 0 || M <= m2 || n2 < 0 || N <= n2) {
            continue;
        }
        if (distance < arr[n2][m2]) {
            arr[n2][m2] = distance;
            solve(m2, n2, distance + 1);
        }
    }
}
