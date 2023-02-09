function solution(word) {
    var answer = 0;
    word = word.replaceAll('A', '0')
        .replaceAll('E', '1')
        .replaceAll('I', '2')
        .replaceAll('O', '3')
        .replaceAll('U', '4');
    const length = word.length;
    // //5-9, 11-15, 17-21, 23-27 29-33, 35-39
    // //4, 10, 16, 22, 28
    // //3, 34, 65, 96, 127,
    // //2 158 
    // 5 25 125 625
    // 1 6 31 156
    const multiConst = [1,6,31,156, 781];
    for (let i = 0; i < length; ++i) {
        if (word[i])
            answer += (Number(word[i])) * multiConst[4-i] + 1;
    }
    
    return answer;
}