const fs = require("fs");
const input = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map(Number);

input.slice(1).forEach((n) => {
    console.log(solve(n, 5));
});

function solve(n, val) {
    let temp = val;
    let ret = 0;
    while (temp <= n) {
        ret += Math.floor(n / temp);
        temp *= val;
    }
    return ret;
}
