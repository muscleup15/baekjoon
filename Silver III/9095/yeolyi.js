const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const answer = [1, 2, 4]

for (let i = 3; i < 11; i++) {
    const next = answer[i - 3] + answer[i - 2] + answer[i - 1];
    answer.push(next);
}

input.slice(1).forEach(x => {
    console.log(answer[x - 1]);
})
