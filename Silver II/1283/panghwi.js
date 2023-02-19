let fs = require('fs');
let input = fs
  .readFileSync(
    '/Users/panghwi/Library/Mobile Documents/com~apple~TextEdit/Documents/예제.txt'
  )
  .toString()
  .trim()
  .split('\n');

const [optionNum, ...Options] = input;
let shortCut = [];

/**
 * 띄어쓰기 한것들의 첫번째 문자부터 확인하고 없다면 그냥 한꺼번에 다 합쳐서(ex 'n'e'w' 'a'r'r'a'y)나오는 문자에 [] 삽입?
 */

const Option = Options[0].split(' ');
for (let i = 0; i < Option.length; i++) {
  let temp = Option[i].split('');
  if (!shortCut.includes(temp[0])) {
    shortCut.push(temp[0]);
    temp.splice(0, 0, '[');
    temp.splice(2, 0, ']');
    break;
  }
  console.log(temp);
}
