const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const memo = [[1, 0], [0, 1]];

function solve(n) {
    if (memo[n] !== undefined) {
        return memo[n];
    }
    const first = solve(n - 2);
    const second = solve(n - 1);
    const result = [first[0] + second[0], first[1] + second[1]];
    memo[n] = result;
    return result;
}

input.slice(1).forEach(x => {
    console.log(solve(x).join(' '));
})
