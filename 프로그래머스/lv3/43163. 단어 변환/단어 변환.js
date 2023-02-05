function alphabetDiffCounter(word1, word2) {
    let count = 0;
    for (let i = 0; i < word1.length; i++) {
        if (word1[i] !== word2[i]) count++;
    }
    return count;
}

function solution(begin, target, words) {
    if (!words.includes(target)) return 0;
    if (begin === target) return 0;
    if (words.length < 3 || words.length > 50) return 0;
    
    
    const roundWords = [begin];
    let roundNumber = 0;
    
    while (roundWords.length && roundNumber <= words.length) {
        const targetCandidates = roundWords.slice();
        while (targetCandidates.length) {
            let maybeTarget = targetCandidates.pop();
            if (maybeTarget === target) return roundNumber;
            for (const word of words) {
                if (alphabetDiffCounter(word, maybeTarget) === 1) {
                    roundWords.push(word);
                }
            }   
        }
        roundNumber += 1;
    }
    return 0;
}