const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const cost = +input[0];
const arr = input.slice(1).map(x => x.split(' ').map(x => +x));

let longestIdx = 0;
const longest = arr.reduce((a, b, i) => {
    if (a[1] < b[1]) {
        longestIdx = i
        return b;
    } else {
        return a;
    }
});

let anotherLongestIndex;
let temp1 = arr[(longestIdx + 1) % 6][1] ?? 0;
let temp2 = arr[(longestIdx + 5) % 6][1] ?? 0;
if (temp1 < temp2) {
    anotherLongestIndex = (longestIdx + 5) % 6;
} else {
    anotherLongestIndex = (longestIdx + 1) % 6;
}

const side1 = arr[longestIdx][1];
const side2 = arr[anotherLongestIndex][1];
const fullArea = side1 * side2;

if ((anotherLongestIndex + 1) % 6 === longestIdx) {
    const side3 = arr[(longestIdx + 2) % 6][1];
    const side4 = arr[(longestIdx + 3) % 6][1];
    console.log((fullArea - side3 * side4) * cost);
} else {
    const side3 = arr[(anotherLongestIndex + 2) % 6][1];
    const side4 = arr[(anotherLongestIndex + 3) % 6][1];
    console.log((fullArea - side3 * side4) * cost);
}
