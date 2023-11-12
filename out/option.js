"use strict";
const some = (x) => ({
    _tag: 'Some',
    value: x
});
const none = () => ({
    _tag: 'None'
});
const run = (input, transform) => {
    if (input._tag === 'None') {
        return none();
    }
    return transform(input.value);
};
const wrapWithOption = (x) => some(x);
