function solution(s) {
    var answer = [];
    [...s].reduce((prev, curr, idx) => {
        if (prev[curr] !== undefined) {
            answer.push(idx - prev[curr]);
        } else {
            answer.push(-1);
        }
        prev[curr] = idx;
        return prev;
    }, {});
    return answer;
}