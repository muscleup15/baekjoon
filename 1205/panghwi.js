let fs = require('fs');
const [info, rank] = fs
  .readFileSync(
    '/Users/panghwi/Library/Mobile Documents/com~apple~TextEdit/Documents/예제.txt'
  )
  .toString()
  .split('\n');
// const [info, rank] = fs.readFileSync('dev/stdin').toString().split('\n');
const [existNumber, myScore, maxNumber] = info.split(' ').map(Number);
if (existNumber === 0) {
  console.log(1);
} else {
  const sortedRank = [...rank.split(' ').map(Number), myScore].sort(
    (a, b) => b - a
  );
  const firstRank = sortedRank.findIndex((item) => item === myScore);
  const lastRank =
    sortedRank.length -
    sortedRank.reverse().findIndex((item) => item === myScore);
  const answer = lastRank <= maxNumber ? firstRank + 1 : -1;
  console.log(answer);
}
