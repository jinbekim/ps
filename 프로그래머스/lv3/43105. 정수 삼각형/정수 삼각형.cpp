#include <string>
#include <vector>
#include <algorithm>

using namespace std;


int find_max_integer(vector<int> arr) {
    sort(arr.begin(), arr.end(), [](int a,int b) {return a>b;});
    return arr[0];
}

int solution(vector<vector<int>> triangle) {
    int answer = 0;
    int triangle_height = triangle.size();
    for (int i = 1; i < triangle_height ; i++ ) {
        for (int j = 0; j < triangle[i].size(); ++j) {
          if (j == triangle[i].size() - 1) {
              triangle[i][j] += triangle[i-1][j-1];
          } else if (j == 0) {
              triangle[i][j] += triangle[i-1][0];
          } else {
              triangle[i][j] += max(triangle[i-1][j-1], triangle[i-1][j]);
          }
        }
    }
    answer = find_max_integer(triangle[triangle_height - 1]);
    return answer;
}