const makeOpCheckCb = (op_start, op_end) => (pos) => {
    return cmp(op_start, pos) && cmp(pos, op_end);
}

function getSec(str) {
    const [mm, ss] = str.split(':');
    return +mm * 60 + +ss;
}

function getStr(sec) {
    const mm = Math.floor(sec / 60);
    const ss = sec % 60;
    
    function padZero(num) {
        if (num < 10) return '0' + num;
        else return num.toString();
    }
    
    return `${padZero(mm)}:${padZero(ss)}`;
}

function cmp(a, b) {
    return (getSec(b) - getSec(a)) >= 0;
}

function solution(video_len, pos, op_start, op_end, commands) {
    var answer = pos;
    const isOpRange = makeOpCheckCb(op_start, op_end);
            if(isOpRange(answer)){
            answer = op_end;
        }
    
    commands.forEach(cmd => {
        if (cmd === 'next'){
            const sec = Math.min(getSec(answer) + 10, getSec(video_len));
            answer = getStr(sec);
        }
        if (cmd === 'prev'){
            const sec = Math.max(getSec(answer) - 10, 0);
            answer = getStr(sec);
        }
        if(isOpRange(answer)){
            answer = op_end;
        }
    })
    
    return answer;
}