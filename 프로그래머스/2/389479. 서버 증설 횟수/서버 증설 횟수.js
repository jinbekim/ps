function useServerInfo(k) {
    let serverCount = [];
    let addCost = 0;
    const add = (n) => {
        serverCount[k-1] = n;
        addCost += n;
    }
    const ticktock = () => {
        serverCount.shift();
    }
    const getCount = () => serverCount.reduce((a,b) => a+b,0);
    const getTotal = () => addCost;
    return {
        getTotal,
        add,
        ticktock,
        getCount
    }
}
// 0시에서 23시까지의 시간대별 게임 이용자의 수를 나타내는 1차원 정수 배열 players, 
// 서버 한 대로 감당할 수 있는 최대 이용자의 수를 나타내는 정수 m,
// 서버 한 대가 운영 가능한 시간을 나타내는 정수 k
function solution(players, m, k) {
    var answer = 0;
    const server = useServerInfo(k);
    players.forEach(p => {
        const n = server.getCount() + 1;
        if (p >= n * m) {
            const short = p - (n*m);
            server.add(Math.floor(short / m) + 1);
        }
        server.ticktock();
    })
    return server.getTotal(); // 최소 증설 횟수
}