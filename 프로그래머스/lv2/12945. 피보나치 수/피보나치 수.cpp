#include <string>
#include <vector>

using namespace std;

int solution(int n) {
    unsigned long long num1;
    unsigned long long num2;
    unsigned long long num3;
    
    num1 = 0;
    num2 = 1;
    num3 = 1;
    n -= 2;
    while (n) {
        num1 = num2 %1234567;
        num2 = num3 %1234567;
        num3 = (num1 + num2) % 1234567;
        n--;
    }
    
    return num3;
}