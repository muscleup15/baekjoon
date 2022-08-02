let fs = require('fs');
let input = fs
  .readFileSync(
    '/Users/panghwi/Library/Mobile Documents/com~apple~TextEdit/Documents/예제.txt'
  )
  .toString()
  .split('\n');
// let input = fs.readFileSync('dev/stdin').toString().split('\n');
const length = Number(input[0]);
const A = input[1].split(' ').map(Number);
const B = input[2].split(' ').map(Number);
let newArray = [];
let newBarray = new Array(length).fill(0);
while (A.length !== 0) {
  let bIndex = B.indexOf(Math.max(...B));
  newBarray[bIndex] = Math.max(...B);
  B[bIndex] = -1;
  let aIndex = A.indexOf(Math.min(...A));
  newArray[bIndex] = Math.min(...A);
  A.splice(aIndex, 1);
}
const answer = newArray.reduce((acc, element, index) => {
  return (acc += element * newBarray[index]);
}, 0);
console.log(answer);
