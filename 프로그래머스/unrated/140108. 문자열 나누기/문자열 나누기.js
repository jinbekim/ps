function solution(s) {
    var answer = 0;
    let i = 0;
    while (s[i]) {
        let c1Count = 0;
        let c2Count = 0;
        const c1 = s[i];
        while(s[i]) {
            if (c1 === s[i]) c1Count += 1;
            else c2Count += 1;
            i+=1;
            if (c1Count === c2Count) break;
        }
        answer += 1;
    }
    return answer;
}