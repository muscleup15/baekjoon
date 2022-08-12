let fs = require('fs');
let input = fs
  .readFileSync(
    '/Users/panghwi/Library/Mobile Documents/com~apple~TextEdit/Documents/예제.txt'
  )
  .toString()
  .trim()
  .split('\n');

let east = 0;
let west = 0;
let north = 0;
let south = 0;
let array = [];
let width = 0;
let length = 0;
for (let i = 1; i < input.length; i++) {
  [direction, scale] = input[i].split(' ').map(Number);
  if (direction == 1) {
    east += scale;
  }
  if (direction == 2) {
    west += scale;
  }
  if (direction == 3) {
    south += scale;
  }
  if (direction == 4) {
    north += scale;
  }
  array.push([direction, scale]);
}
let leng = [{ East: east }, { West: west }, { North: north }, { South: south }];
let total = leng[0].East * leng[2].North;

getLength(array, 3, 2);
getLength(array, 1, 3);
getLength(array, 2, 4);
getLength(array, 4, 1);

let answer = (total - width * length) * Number(input[0]);
console.log(answer);

function getLength(array, num1, num2) {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i][0] == num1 && array[i + 1][0] == num2) {
      width = array[i][1];
      length = array[i + 1][1];
    } else if (array[0][0] == num2 && array[array.length - 1][0] == num1) {
      width = array[0][1];
      length = array[array.length - 1][1];
    }
  }
}
