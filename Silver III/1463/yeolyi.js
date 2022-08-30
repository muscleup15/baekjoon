const fs = require('fs');
const N = +fs.readFileSync('/dev/stdin').toString()
const cache = [0, 0];
for (let n = 2; n <= N; n++) {
    const arr = [];
    if (n % 3 === 0) { arr.push(cache[n / 3]); }
    if (n % 2 === 0) { arr.push(cache[n / 2]); }
    arr.push(cache[n - 1]);
    cache.push(Math.min(...arr) + 1);
}
console.log(cache.pop());
