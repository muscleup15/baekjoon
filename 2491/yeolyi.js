const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const arr = Array.from(input[1].split(' ')).map(Number);

let cnt1 = 1;
let cnt2 = 1;
let ret = 1;

for (let idx = 1; idx < arr.length; idx++) {
    if (arr[idx - 1] < arr[idx]) {
        ret = Math.max(ret, ++cnt1, cnt2);
        cnt2 = 1;
    } else if (arr[idx - 1] == arr[idx]) {
        ret = Math.max(ret, ++cnt1, ++cnt2);
    } else {
        ret = Math.max(ret, cnt1, ++cnt2);
        cnt1 = 1;
    }
}

console.log(ret);
