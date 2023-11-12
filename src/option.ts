type Some<T> = {
    _tag: 'Some';
    value: T;
};

type None = {
    _tag: 'None';
};

type Option<T> = Some<T> | None; // Option Monad

const some = <T>(x: T): Some<T> => ({
    _tag: 'Some',
    value: x
});

const none = (): None => ({
    _tag: 'None'
});


const run = <T>(
    input: Option<T>,
    transform: (_: T) => Option<T>
): Option<T> => {
    if (input._tag === 'None') {
        return none();
    }

    return transform(input.value);
}

const wrapWithOption = <T>(x: T): Option<T> => some(x);