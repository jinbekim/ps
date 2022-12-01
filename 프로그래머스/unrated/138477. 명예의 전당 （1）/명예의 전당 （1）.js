function solution(k, score) {
    var answer = [];
    const hall = [];
    score.forEach((val) => {
        const arrLen = hall.push(val);
        hall.sort((a,b) => b - a);
        if (arrLen > k) {
            hall.pop();
        }
        answer.push(hall[hall.length - 1]);
    })
    console.log(answer);
    return answer;
}