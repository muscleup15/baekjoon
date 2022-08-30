let fs = require('fs');
let input = fs
  .readFileSync(
    '/Users/panghwi/Library/Mobile Documents/com~apple~TextEdit/Documents/예제.txt'
  )
  .toString()
  .trim()
  .split('\n');
const N = Number(input)
let lastFive = 1
  for(let i = 1;i<=N;i++){
    lastFive *= i
    lastFive = String(lastFive);
    while(lastFive[lastFive.length-1] == 0)
    {
        lastFive = lastFive.slice(0,-1);
    }
    console.log(lastFive);
    lastFive = lastFive.slice(-12)
    lastFive = Number(lastFive)
  }
  lastFive = String(lastFive)
  while(lastFive.length<5){
    lastFive = '0'+lastFive;
  }
  lastFive = lastFive.slice(-5)
  console.log(lastFive);