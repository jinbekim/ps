function alphabetDiff(word1, word2) {
    let count = 0;
    for (let i = 0; i < word1.length; i++) {
        if (word1[i] !== word2[i]) count++;
    }
    return count;
}

function solution(begin, target, words) {
    if (words.find(val => val === target) === -1) return 0;
    if (begin === target) return 0;
    if (words.length < 3 || words.length > 50) return 0;
    
    
    const q = [begin];
    let count = 0;
    
    while (q.length && count <= words.length) {
        const c= q.slice();
        while (c.length) {
            let w = c.pop();
            if (w === target) return count;
            for (let word of words) {
                if (alphabetDiff(word, w) === 1) {
                    q.push(word);
                }
            }   
        }
        count += 1;
    }
    return 0;
}