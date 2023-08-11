function romanToInt(s: string): number {
    let result = 0;

    const mapper = {
        "I": 1,
        "V":5,
        "X":10,
        "L": 50,
        "C":100,
        "D":500,
        "M": 1000,
    };

    const ss = [...s];

    ss.forEach((val,idx) => {
        if (mapper[val] < mapper[ss[idx+1]])
            result -= mapper[val];
        else
            result += mapper[val];
    });


    return result;
};