function solution(citations) {
    const answer = citations.sort((a,b) => b-a).findIndex((val, idx) => val <= idx);
return answer === -1  ? citations.length : answer;
}