#include <string>
#include <vector>
#include <algorithm>    // std::sort
#include <iostream>

#define DIA 0
#define IRON 1
#define STONE 2

using namespace std;

vector<vector<int>> chart = {
    {1, 1, 1},
    {5, 1, 1},
    {25, 5, 1}
};


int get_mineral_code(string mineral){
    if (mineral == "diamond") return 0;
    if (mineral == "iron") return 1;
    return 2;
}

int get_fatigue(int pick, vector<string> minerals) {
    int total = 0;
    for (const auto mineral : minerals) {
        int code = get_mineral_code(mineral);
        total += chart[pick][code];
    }
    return total;
}

bool compare(vector<string> a, vector<string> b) {
    return get_fatigue(STONE, a) > get_fatigue(STONE, b);
}

int get_min(int a, int b) {
    if (a > b)return b;
    return a;
}

int solution(vector<int> picks, vector<string> minerals) {

    int answer = 0;
    int mining_limit = get_min(picks[DIA] * 5 + picks[IRON] * 5 + picks[STONE] * 5, minerals.size());  
    vector<string> max_minerals(minerals.begin(), minerals.begin() + mining_limit);
    
    
    vector<vector<string>> chop;
    for (size_t i = 0; i < max_minerals.size(); i += 5) {
        vector<string> temp;
        for (size_t j = i; j < i + 5 && j < max_minerals.size(); ++j) {
            temp.push_back(max_minerals[j]);
        }
        chop.push_back(temp);
    }
    sort(chop.begin(), chop.end(), compare);
    int chop_idx = 0;
    
    for (int pick = 0; pick < picks.size(); ++pick){ 
        int count_try = picks[pick];
        while(count_try-- && chop_idx < chop.size()) {
            answer += get_fatigue(pick, chop[chop_idx++]);
        }
    }
    
    return answer;    
}