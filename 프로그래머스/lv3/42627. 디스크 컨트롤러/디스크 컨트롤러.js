function solution(jobs) {
  jobs.sort((a, b) => {
    if (a[0] !== b[0]) return a[0] - b[0]
    return a[1] - b[1]
  })
  const len = jobs.length

  let working
  let timer = jobs[0][0];
  let totalTime = 0

  const readyQueue = [jobs.shift()]
  while (readyQueue.length || working || jobs.length) {
    while (jobs[0] && jobs[0][0] <= timer) {
      const next = jobs.shift()
      if (readyQueue.length) {
        const index = readyQueue.findIndex(([s, d]) => d > next[1])
        readyQueue.splice(index, 0, next)
      } else {
        readyQueue.push(next)
      }
    }
    if (!readyQueue.length)  {
        timer +=1;
        continue;
    }
    readyQueue.sort((a,b) => a[1] - b[1]);
    if (readyQueue.length) {
        working = readyQueue.shift()
        if (timer <= working[0]) totalTime += working[1];
        else totalTime += (timer - working[0]) + working[1];
        timer += working[1]
        working = null
    }
  }
  return Math.floor(totalTime / len)
}

