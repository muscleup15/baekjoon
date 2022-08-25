const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const cost = +input[0];
const arr = input.slice(1).map(x => +x.split(' ')[1]);

const rotateIndex = (i, offset) => (i + offset + 6) % 6;

const longestIdx = arr.reduce((a, b, i) =>  arr[a] < b ? i : a, 0);

const tempIdx1 = rotateIndex(longestIdx, 1);
const tempIdx2 = rotateIndex(longestIdx, -1);
const anotherLongestIndex = (arr[tempIdx1] ?? 0) < (arr[tempIdx2] ?? 0) ? tempIdx2 : tempIdx1;

const side1 = arr[longestIdx];
const side2 = arr[anotherLongestIndex];
const fullArea = side1 * side2;

if (rotateIndex(anotherLongestIndex, 1) === longestIdx) {
    const side3 = arr[rotateIndex(longestIdx, 2)];
    const side4 = arr[rotateIndex(longestIdx, 3)];
    console.log((fullArea - side3 * side4) * cost);
} else {
    const side3 = arr[rotateIndex(anotherLongestIndex, 2)];
    const side4 = arr[rotateIndex(anotherLongestIndex, 3)];
    console.log((fullArea - side3 * side4) * cost);
}
