"use strict";
;
const wrapWithLogs = (x) => {
    return {
        result: x,
        logs: [],
    };
};
const runWithLogs = (input, transform) => {
    const newWriter = transform(input.result);
    return {
        result: newWriter.result,
        logs: input.logs.concat(newWriter.logs)
    };
};
