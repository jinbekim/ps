function isValid(s: string): boolean {
// use stack
// if closing tag, idx, compare current idx char with the top of stack
// if matched pop out
// if open tag ? push
const stack = [];
const round = '()';
const curly = '{}';
const box = '[]';
const opener = ['[', '(', '{'];

    return [...s].every((val) => {
        if (opener.includes(val))
            return stack.push(val);
        if (round.startsWith(stack[stack.length - 1])
            && round.endsWith(val))
                return stack.pop();
        if (curly.startsWith(stack[stack.length - 1])
            && curly.endsWith(val))
                return stack.pop();
        if (box.startsWith(stack[stack.length - 1])
            && box.endsWith(val))
                return stack.pop();
        return false;
    }) && stack.length === 0;
};