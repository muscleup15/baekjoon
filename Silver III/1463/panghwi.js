let fs = require('fs');
let input = fs
  .readFileSync(
    '/Users/panghwi/Library/Mobile Documents/com~apple~TextEdit/Documents/예제.txt'
  )
  .toString()
  .trim()
  .split('\n')
  .map(Number);

let num = input[0];


//5개의 식이 있는데 이걸로 만들면 5!개
