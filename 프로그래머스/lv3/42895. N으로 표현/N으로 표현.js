

/**
17 = 4 * 4 + (4 / 4);
*/
function solution(N, number) {
    const arr = Array.from({length: 10}, () => new Set());
    
    for (let i = 1, num = ''; i < 9; ++i) {
        num += N.toString();
        arr[i].add(Number(num));
    }
    
    for (let i = 1; i < 9; ++i) {
        for(let j = 1; j < 9; ++j) {
            if (i + j > 9) break; 
                for (const num of arr[i]) {    
                for (const num2 of arr[j]) {
                    arr[i+j].add(num*num2);
                    arr[i+j].add(num+num2);
                    arr[i+j].add(num-num2);
                    if (num2 !== 0)
                        arr[i+j].add(Math.floor(num/num2));
                    
                }
            }
        }
    }
    for (let i = 1; i < 9; ++i) 
        if (arr[i].has(number)) return i;
    return  -1;
}