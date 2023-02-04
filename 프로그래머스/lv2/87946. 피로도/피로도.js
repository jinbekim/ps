// k: 현재 피로도
// dungeons: 던전 배열[최소 피로도, 소모 피로도]
function solution(k, dungeons) {
    let answer = 0;
    const d = dungeons.slice().sort((a,b) => {
        const bx = b[0] - b[1];
        const ax = a[0] - a[1];
        
        if (bx === ax) return a[0] - b[0];
        return bx - ax;
    });
    const f = dungeons.slice().sort((a,b) => {
        const x = a[1] - b[1];
        if (x === 0) return b[0]-a[0];
        return x;
    });
    let j = k;
    d.forEach((d) => {
        if (k < d[0]) return false;
        if (k >= d[0]) k -= d[1];
        return answer += 1;
    });
    let a = 0;
    f.forEach((d) => {
        if (j < d[0]) return false;
        if (j >= d[0]) j -= d[1];
        return a += 1;
    });
    
    return a > answer ? a : answer;
}
//최소 필요 피로도 : 시작전
//소모 피로도: 탐험 후 감소
// answer : 최대 탐험 던전 수