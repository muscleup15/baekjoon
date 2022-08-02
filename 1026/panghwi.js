let fs = require('fs');
let input = fs
  .readFileSync(
    '/Users/panghwi/Library/Mobile Documents/com~apple~TextEdit/Documents/예제.txt'
  )
  .toString()
  .split('\n');
// let input = fs.readFileSync('dev/stdin').toString().split('\n');
const length = input[0];
const A = input[1].split(' ').map(Number);
const B = input[2].split(' ').map(Number);
let newArray = [];
//A의 최솟값을 B의 최댓값의 인덱스에 할당하고 싶다

while (A.length !== 0) {
  let bIndex = B.indexOf(Math.max(...B));
  B.splice(bIndex, 1);
  console.log(B);
  let aIndex = A.indexOf(Math.min(...A));
  console.log(A);
  newArray[bIndex] = Math.min(...A);
  A.splice(aIndex, 1);
}
console.log(newArray);
