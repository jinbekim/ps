/// find networks
function solution(n, computers) { 

    let answer = 0;
    const VISIT = 2;
    const CONNECT = 1;
    
    for (let i = 0; i < n ; ++i) {
        if (computers[i][i] === VISIT)  continue;
        
        
        dfs(computers[i]);
        function dfs(arr) {
            for (let j =0 ; j <n ; ++j) {
                if (arr[j] !== CONNECT) continue;
                arr[j] = VISIT;
                dfs(computers[j]);
            }

        }
        
        
        answer += 1;
    }
    return answer;
}