function solution(arr)
{
    const answer = [];
    
    arr.reduce((prev, curr) => {
        if (prev !== curr) answer.push(curr);
        return curr;
    }, -1);
    
    return answer;
}