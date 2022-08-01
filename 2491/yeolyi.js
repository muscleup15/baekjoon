const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const arr = Array.from(input[1].split(' ')).map(Number);

let cnt = 1;
let ret = 1;

for (let idx = 1; idx < arr.length; idx++) {
    if (arr[idx - 1] <= arr[idx]) {
        cnt++;
        ret = Math.max(ret, cnt);
    } else {
        ret = Math.max(ret, cnt);
        cnt = 1;
    }
}

cnt = 1;

for (let idx = 1; idx < arr.length; idx++) {
    if (arr[idx - 1] >= arr[idx]) {
        cnt++;
        ret = Math.max(ret, cnt);
    } else {
        ret = Math.max(ret, cnt);
        cnt = 1;
    }
}

console.log(ret);
