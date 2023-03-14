#include <iostream>

using namespace std;

int answer[1000001] = {0, };

int	dp(int N)
{
	int min, tmp;
	if (N == 1)
		return 0;
	if (answer[N] != 0)
		return (answer[N]);
	min = dp(N-1) + 1;
	if (N %2 == 0) {
		tmp = dp(N/2) + 1;
		if (min > tmp) min = tmp;
	}
	if (N %3 == 0){
		tmp = dp(N/3) + 1;
		if (tmp < min) min = tmp;
	}
	return (answer[N] = (min));
}

int main()
{
	int N;
	scanf("%d", &N);
	printf("%d\n", dp(N));
	return 0;
}
