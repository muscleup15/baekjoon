const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let idx = 0;

while (true) {
    const [w, h] = input[idx++].split(" ").map(Number);
    if (w === 0) { break; }
    const map = [];
    for (let i = 0; i < h; i++) {
        map.push(input[idx++].split(' ').map(Number));
    }

    let cnt = 0;

    for (let m = 0; m < h; m++) {
        for (let n = 0; n < w; n++) {
            if (map[m][n] === 1) {
                solve(map, m, n, w, h);
                cnt++;
            }
        }
    }

    console.log(cnt);
}

function solve(map, m, n, w, h) {
    map[m][n] = -1;
    for (let dm = -1; dm < 2; dm++) {
        for (let dn = -1; dn < 2; dn++) {
            const m2 = m + dm;
            const n2 = n + dn;
            if (m2 < 0 || m2 >= h || n2 < 0 || n2 >= w) {
                continue;
            }
            if (map[m2][n2] === 1) {
                solve(map, m2, n2, w, h);
            }
        }
    }
}
