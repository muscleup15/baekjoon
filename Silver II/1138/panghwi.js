let fs = require('fs');
let input = fs
  .readFileSync(
    '/Users/panghwi/Library/Mobile Documents/com~apple~TextEdit/Documents/예제.txt'
  )
  .toString()
  .trim()
  .split('\n');

const peopleNum = Number(input[0]);
const people = input[1].split(' ').map(Number);
const answer = new Array();
//역순으로 찾아야 할듯

answer.push(peopleNum); //마지막 사람의 키

for (let i = peopleNum - 1; i >= 1; i--) {
  const height = i;
  //키를 삽입해야 함
  answer.splice(people[i - 1], 0, height);
}

console.log(answer.join(' '));
