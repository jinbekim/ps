function solution(jobs) {
  jobs.sort(([a,b], [c,d]) =>(a-c || b- d));
  const len = jobs.length

  let timer = jobs[0][0];
  let totalTime = 0;

  const readyQueue = [jobs.shift()]
  while (readyQueue.length || jobs.length) {
    while (jobs[0] && jobs[0][0] <= timer) {
      const next = jobs.shift()
        readyQueue.push(next);
    }
    readyQueue.sort((a,b) => a[1] - b[1]);
    if (readyQueue.length) {
        let [requestTime, workingTime] = readyQueue.shift()
        const waiting = (timer - requestTime);
        totalTime += workingTime;
        if (waiting > 0) totalTime += waiting;
        timer += workingTime;
    } else timer += 1;
  }
  return Math.floor(totalTime / len)
}

