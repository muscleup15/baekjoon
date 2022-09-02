const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const T = +input[0];
let cur = 1;

const d = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
];

Array(T)
    .fill(0)
    .forEach(() => {
        const [M, N, K] = input[cur++].split(" ").map(Number);
        const arr = Array(N)
            .fill(0)
            .map(() => Array(M).fill(false));

        input
            .slice(cur, cur + K)
            .map((x) => x.split(" "))
            .forEach(([m, n]) => {
                arr[n][m] = true;
            });

        cur += K;

        let cnt = 0;
        for (let m = 0; m < M; m++) {
            for (let n = 0; n < N; n++) {
                if (arr[n][m]) {
                    cnt++;
                    search(arr, m, n, M, N);
                }
            }
        }

        console.log(cnt);
    });

function search(arr, m, n, M, N) {
    arr[n][m] = false;
    for ([dm, dn] of d) {
        const m2 = m + dm;
        const n2 = n + dn;
        if (m2 < 0 || M <= m2 || n2 < 0 || N <= n2) {
            continue;
        }
        if (!arr[n2][m2]) {
            continue;
        }
        search(arr, m2, n2, M, N);
    }
}
