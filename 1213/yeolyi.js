(() => {
    const fs = require('fs');
    const input = fs.readFileSync('/dev/stdin').toString();
    const cnt = Array(26).fill(0);

    [...input]
        .map(x => x.charCodeAt() - 65)
        .forEach(x => cnt[x]++);

    const ans = [];
    let middle = null;
    
    for (let [i, val] of cnt.entries()) {
        if (val === 0) { continue; }
        if (val % 2 !== 0) {
            if (middle !== null) {
                console.log("I'm Sorry Hansoo");
                return;
            } else {
                middle = i;
            }
        }
        ans.push(...new Array(Math.floor(val / 2)).fill(i + 65));
    }
    if (middle !== null) {
        console.log(String.fromCharCode(...ans, middle + 65, ...ans.reverse()));
    } else {
        console.log(String.fromCharCode(...ans, ...ans.reverse()));
    }
})();