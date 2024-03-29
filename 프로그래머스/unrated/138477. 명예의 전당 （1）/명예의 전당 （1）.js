function solution(k, score) {
    const hall = [];
    return score.reduce((answer, val) => {
        const arrLen = hall.push(val);
        hall.sort((a,b) => b - a);
        if (arrLen > k) {
            hall.pop();
        }
        answer.push(hall[hall.length - 1]);
        return answer;
    },[]);
}