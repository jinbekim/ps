#include <string>
#include <vector>
#include <algorithm>
#include <iostream>


using namespace std;

bool isSuccess(long long limit, int level, vector<int> diffs, vector<int> times) {
    long long time = 0;
    for (int idx = 0; idx < diffs.size(); ++idx) {
        int diff = diffs[idx] - level;
        if (diff <= 0) {
            time += times[idx];
        } else {
            time += diff * (times[idx] + times[idx-1]) + times[idx];
        }
        if (time > limit) {
            return false;
        }
    }
    
    return true;
}

int solution(vector<int> diffs, vector<int> times, long long limit) {
    int min_level = 1;
    int max_level = *max_element(diffs.begin(), diffs.end());
    
    while(min_level < max_level) {
        int middle = (min_level + max_level) / 2;
        
        if (isSuccess(limit, middle, diffs, times)) {
            max_level = middle;
        } else {
            min_level = middle + 1;
        }
    }
    
    return min_level;
}