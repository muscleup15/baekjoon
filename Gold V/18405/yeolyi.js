const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N] = input[0].split(" ").map(Number);
const arr = input
    .slice(1, input.length - 1)
    .map((x) => x.split(" ").map(Number));
let [S, X, Y] = input[input.length - 1].split(" ").map(Number);
X -= 1;
Y -= 1;

let virusTypes = new Set(arr.reduce((val, next) => val.concat(next), []));
virusTypes = [...virusTypes].sort((a, b) => a - b).slice(1);

let flag = false;
const dd = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
];

loop: for (let _ = 0; _ < S; _++) {
    for (const virus of virusTypes) {
        const added = [...Array(N)].map((x) => Array(N).fill(false));
        for (let m = 0; m < N; m++) {
            for (let n = 0; n < N; n++) {
                if (arr[m][n] !== virus || added[m][n]) {
                    continue;
                }
                for (const d of dd) {
                    const x2 = m + d[0];
                    const y2 = n + d[1];
                    if (
                        0 <= x2 &&
                        x2 < N &&
                        0 <= y2 &&
                        y2 < N &&
                        arr[x2][y2] === 0
                    ) {
                        if (x2 === X && y2 === Y) {
                            console.log(virus);
                            flag = true;
                            break loop;
                        }
                        added[x2][y2] = true;
                        arr[x2][y2] = virus;
                    }
                }
            }
        }
    }
}

!flag && console.log(0);
