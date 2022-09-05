const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const numbers = input[1].split(" ").map(Number);
const operators = input[2].split(" ").map(Number);

function search(numbers, operators) {
    if (numbers.length === 1) {
        return [numbers[0], numbers[0]];
    }
    const a = numbers[0];
    const b = numbers[1];
    let min = 10 ** 10,
        max = -(10 ** 10);
    for (let i = 0; i < 4; i++) {
        if (operators[i] === 0) {
            continue;
        }
        let newNumber;
        switch (i) {
            case 0:
                newNumber = a + b;
                break;
            case 1:
                newNumber = a - b;
                break;
            case 2:
                newNumber = a * b;
                break;
            case 3:
                newNumber = Math.trunc(a / b);
                break;
        }
        const newNumbers = [newNumber, ...numbers.slice(2)];
        const newOperators = [...operators];
        newOperators[i] -= 1;
        const [min2, max2] = search(newNumbers, newOperators);
        min = Math.min(min, min2);
        max = Math.max(max, max2);
    }
    return [min, max];
}

const [min, max] = search(numbers, operators);

console.log(max === 0 ? 0 : max);
console.log(min === 0 ? 0 : min);
