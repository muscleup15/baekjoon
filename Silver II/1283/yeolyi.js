const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const selected = new Set();
input.slice(1).forEach(x => solve(x));

function solve(str) {
    const words = str.split(' ');
    for (const word of words) {
        const firstLetter = word[0].toLowerCase();
        if (!selected.has(firstLetter)) {
            selected.add(firstLetter);
            console.log(str.replace(new RegExp(`\\b${word[0]}`), `[${word[0]}]`));
            return;
        }
    }
    for (const letter of [...str]) {
        if (letter === ' ') { continue; }
        const lowercase = letter.toLowerCase();
        if (!selected.has(lowercase)) {
            selected.add(lowercase);
            console.log(str.replace(new RegExp(`${letter}`), `[${letter}]`));
            return;
        }
    }
    console.log(str);
}
