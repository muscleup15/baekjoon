const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const arr = input.slice(1).map(x => x.split(' ').map(Number));
const matchingIndex = [5, 3, 4, 1, 2, 0];

function getSideMax(up, bottom) {
    if (up === 6) {
        return bottom === 5 ? 4 : 5;
    } else if (bottom === 6) {
        return up === 5 ? 4 : 5;
    }
    return 6;
}

function solve(bottomVal, dice) {
    const bottomIdx = dice.indexOf(bottomVal);
    const upIdx = matchingIndex[bottomIdx];
    const upVal = dice[upIdx];

    const sideMax = getSideMax(upVal, bottomVal);
    return [upVal, sideMax];
}

let result = 0;

for (let _upVal = 1; _upVal < 7; _upVal++) {
    let upVal = _upVal;
    let total = 0;
    for (let diceIdx=0; diceIdx < arr.length; diceIdx++) {
        if (result >= total+6*(arr.length-diceIdx)) { break; }
        const dice = arr[diceIdx];
        const [nextUpVal, sideMax] = solve(upVal, dice);
        upVal = nextUpVal;
        total += sideMax;
    }
    result = Math.max(result, total);
}

console.log(result);

