#include <string>
#include <vector>
#include <iostream>
#include <algorithm>

using namespace std;

int miny = 0;
int maxy = 0;
vector<vector<int>> copy_land;

int get_oil(int x, int y) {
    if (x < 0 || y < 0 || x >= copy_land.size() || y >= copy_land[0].size()) return 0;
    if (copy_land[x][y]== 0) return 0;
    copy_land[x][y] = 0;
    
    int a = get_oil(x-1, y);
    int b = get_oil(x+1, y);
    int c = get_oil(x, y-1);
    int d = get_oil(x, y+1);
    
    if (miny > y) miny = y;
    if (maxy < y) maxy = y;
    
    return a+b+c+d+1;
}

int solution(vector<vector<int>> land) {
    copy_land = land;
    vector<int> sum(land[0].size(), 0);

    for(int i = 0; i < copy_land.size(); ++i) {
        for(int j = 0; j< copy_land[0].size(); ++j) {
            if (copy_land[i][j] == 0)  continue;
            miny = j; maxy = j;
            
            int tmp = get_oil(i, j);
            
            for(int t=miny; t<= maxy; ++t) sum[t] += tmp;
        }
    }
   
    return *max_element(sum.begin(), sum.end());
}