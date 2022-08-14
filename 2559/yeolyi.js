const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, K] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

const sum = [0];

let temp = 0;
for (const e of arr) {
    temp += e;
    sum.push(temp);
}

let result = Number.MIN_SAFE_INTEGER;
for (let i = 0; i < N - K + 1; i++) {
    result = Math.max(result, sum[i + K] - sum[i]);
}
console.log(result);
