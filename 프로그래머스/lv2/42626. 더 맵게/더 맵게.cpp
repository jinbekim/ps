#include <string>
#include <vector>
#include <set>

int solution(std::vector<int> scoville, int K) {
    int answer = 0;
    std::multiset<long> ms;
    for (int i =0; i < scoville.size(); ++i) {
        ms.insert((long)scoville[i]);
    }
    while (*ms.begin() < K && ms.size() > 1) {
        long kk, jj, tt;
        kk = *ms.begin();
        jj = *(++ms.begin());
        tt = kk + 2*jj;
        ms.erase(ms.begin(), ++(++ms.begin()));
        ms.insert(tt);
        answer++;
        
    }
    if (*ms.begin() < K)
            return (-1);
    return answer;
}