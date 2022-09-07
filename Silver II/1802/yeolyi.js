const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

input.slice(1).forEach(x => {
    const arr = [...x].map(x => x==='0');
    console.log(solve(arr) ? 'YES' : 'NO');
})

function solve(arr) {
    if (arr.length === 1) { return true; }
    let length = arr.length;
    let middle = Math.floor(length/2)
    let left = arr.slice(0, middle);
    let right = arr.slice(middle+1);

    for (let i=0; i<left.length; i++) {
        if (left[i] === right[middle-i-1]) {
            return false
        }
    }

    return solve(left);
}
