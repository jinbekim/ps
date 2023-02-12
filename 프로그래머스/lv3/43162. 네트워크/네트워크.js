/// find networks
function solution(n, computers) { 

    let answer = 2;
    
    for (let i = 0; i < n ; ++i) {
        if (computers[i][i] !== 0 && computers[i][i] !== 1)  continue;
        
        const loop = [i];
        while(loop.length) {
            const num = loop.pop();
            if (computers[num][num] === answer) continue;
            computers[num].forEach((v,id) => {
                if (v === 0) return false;
                computers[num][id] = answer;
                loop.push(id);
            });
        }
        answer += 1;
    }
    return answer - 2;
}