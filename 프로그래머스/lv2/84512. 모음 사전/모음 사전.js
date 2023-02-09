function solution(word) {
    var answer = 0;
    word = word.replaceAll('A', '0')
        .replaceAll('E', '1')
        .replaceAll('I', '2')
        .replaceAll('O', '3')
        .replaceAll('U', '4');
    const length = word.length;
    const multiConst = [1,6,31,156, 781];
    for (let i = 0; i < length; ++i) {
        if (word[i])
            answer += (Number(word[i])) * multiConst[4-i] + 1;
    }
    
    return answer;
}