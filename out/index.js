"use strict";
// Path: index.ts
// Try out options
const a1 = wrapWithOption(1);
const b2 = run(a1, (x) => wrapWithOption(x + 1));
const c3 = run(b2, (x) => wrapWithOption(x * x));
console.log(c3);
// Try out writers
const square = (x) => {
    return {
        result: x * x,
        logs: [`squared ${x} to get ${x * x}`]
    };
};
const addOne = (x) => {
    return {
        result: x + 1,
        logs: [`added one to ${x} to get ${x + 1}`]
    };
};
const a4 = wrapWithLogs(1);
const b5 = runWithLogs(a4, (x) => wrapWithLogs(x + 1));
const c6 = runWithLogs(b5, (x) => wrapWithLogs(x * x));
console.log(c6);
