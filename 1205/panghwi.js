let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n');

const existNumber = Number(input[0].split(' ')[0]);
const myNumber = Number(input[0].split(' ')[1]);
const maxNumber = Number(input[0].split(' ')[2]);
let index = 0;

if (typeof input[1] !== 'undefined') {
  const score = input[1].split(' ').map(Number);
  if (existNumber == maxNumber) {
    if (myNumber > score[score.length - 1]) {
      for (let i = 0; i < existNumber; i++) {
        if (myNumber >= score[i]) {
          index = i + 1;
          break;
        }
      }
    } else {
      index = -1;
    }
  } else {
    for (let i = 0; i < existNumber; i++) {
      if (myNumber >= score[i]) {
        index = i + 1;
        break;
      }
    }
  }
} else {
  index = 1;
}
console.log(index);
