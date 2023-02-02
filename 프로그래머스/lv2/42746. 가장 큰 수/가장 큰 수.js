// function solution(numbers) {
// 	const answer = numbers.sort((a, b) => '' + b + a - ('' + a + b)).join('');
// 	return answer[0] === 0 ? '0' : answer;
// }
function solution(numbers) {
    var answer = numbers.map(String)
                        .sort((a,b) => (b+a)*1 - (a+b)*1)
                        .join('');

    return answer[0]==='0'?'0':answer;
}