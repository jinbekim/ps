function solution(operations) {

    	const queue = [];
        operations.forEach(val => {
			let [a, b] = val.split(' ');
			if (a === 'I') {
				queue.push(+b);
				queue.sort((a, b) => a - b);
			} else if (a === 'D' && b === '-1') {
				queue.shift();
			} else if (a === 'D' && b === '1') {
				queue.pop();
			}
		})
    if (queue.length === 0) return [0, 0];
    else return [queue[queue.length -1 ], queue[0]];
}