const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const [N, M] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number).sort((a, b) => a-b);

let ret = ''

function solve(count, temp) {
    if (count === 0) { 
        ret += temp.join(' ');
        ret += '\n';
        return;
     }
     for (let i=0; i<N; i++) {
        solve(count-1, [...temp, arr[i]]);
     }
}

solve(M, []);
console.log(ret);
