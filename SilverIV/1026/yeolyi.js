const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const arr1 = input[1].split(' ').map(Number).sort((a, b) => a-b)
const arr2 = input[2].split(' ').map(Number).sort((a, b) => b-a)

console.log(arr1.map((e, i) => e*arr2[i]).reduce((a, b) => a+b));
