/// find networks
function solution(n, computers) { 

    let answer = 0;
    const VISIT = 2;
    const CONNECT = 1;
    
    for (let i = 0; i < n ; ++i) {
        if (computers[i][i] === VISIT)  continue;
        
        const bfs = [i];
        while (bfs.length) {
            const id = bfs.pop();
            for (let j =0 ; j <n ; ++j) {
                if (computers[id][j] !== CONNECT) continue;
                computers[id][j] = VISIT;
                bfs.push(j);
            }
        }
        answer += 1;
    }
    return answer;
}