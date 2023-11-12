interface Writer<T> {
    result: T;
    logs: string[];
};

const wrapWithLogs = <T>(x: T): Writer<T> => {
    return {
        result: x,
        logs: [],
    };
}

const runWithLogs = <T>(
    input: Writer<T>,
    transform: (_: T) => Writer<T>
): Writer<T> => {
    const newWriter = transform(input.result);

    return {
        result: newWriter.result,
        logs: input.logs.concat(newWriter.logs)
    };
};