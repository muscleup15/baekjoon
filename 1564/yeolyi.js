const fs = require('fs');
const N = +fs.readFileSync('/dev/stdin').toString();

let temp = 1;
for (let i = 2; i <= N; i++) {
    temp *= i;
    while (temp % 10 === 0) {
        temp /= 10;
    }
    temp %= 10 ** 12;
}
console.log(String(temp % 100000).padStart(5, 0));
