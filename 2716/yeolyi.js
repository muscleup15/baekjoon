const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

[...Array(+input[0]).keys()].forEach(n => {
    const str = input[n + 1];
    let cnt = 0;
    let ret = 0;
    for (const c of str) {
        cnt += c === '[' ? 1 : -1
        ret = Math.max(ret, cnt);
    }
    console.log(Math.pow(2, ret));
});
