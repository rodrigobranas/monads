let f1 = (x) => [x + 1, `${new String(x)}+1`];
let f2 = (x) => [x + 2, `${new String(x)}+2`];
let f3 = (x) => [x + 3, `${new String(x)}+3`];

// imperative

let log = "Explanation: ";
let [res1, log1] = f1(1);
log += `${log1};`;
let [res2, log2] = f2(res1);
log += `${log2};`;
let [res3, log3] = f3(res2);
log += `${log3};`;
console.log(res3, log);

// declarative

function unit(x) {
    return [x, "Explanation: "];
}

function bind(t, f) {
    let res = f(t[0]);
    return [res[0], t[1] + res[1] + ";"];
}

console.log(bind(bind(bind(unit(1), f1), f2), f3));

function pipeline(e, ...functions) {
    for (let f of functions) {
        e = bind(e, f);
    }
    return e;
}

console.log(pipeline(unit(1), f1, f2, f3));
