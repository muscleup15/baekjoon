const fs = require("fs");
let temp = +fs.readFileSync("/dev/stdin").toString();
let result = 0;

while (temp > 0) {
    const digits = (temp + "").length;
    const nearestNines = 10 ** (digits - 1) - 1;
    result += (temp - nearestNines) * digits;
    result %= 1234567;
    temp = nearestNines;
}

console.log(result);
