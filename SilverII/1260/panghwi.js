let fs = require('fs');
let input = fs
  .readFileSync(
    '/Users/panghwi/Library/Mobile Documents/com~apple~TextEdit/Documents/예제.txt'
  )
  .toString()
  .trim()
  .split('\n');
// console.log(input);

const a = [1, 1, 1, 2, 2, 3, 3, 3];
let newA = new Set(a);
newA = [...newA];
let testObject = new Object();
newA.forEach((item) => {
  return (testObject[item] = 0);
});
let keys = Object.keys(testObject);
console.log(keys);
a.forEach((item) => {
  for (let i = 0; i < keys.length; i++) {
    if (item == keys[i]) {
      testObject[keys[i]] += 1;
    }
  }
});
console.log(testObject);
