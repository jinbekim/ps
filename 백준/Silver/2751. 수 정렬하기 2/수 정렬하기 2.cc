#include <iostream>
#include <set>

using namespace std;

int main()
{
	int N;
	set<int> hi;

	scanf("%d", &N);
	for (int i = 0; i <N;++i)
	{
		int tmp;
		scanf("%d", &tmp);
		hi.insert(tmp);
	}
	set<int>::iterator it = hi.begin();
	for (int i =0; i < hi.size(); ++i)
	{
		cout << *it << "\n";
		it++;
	}
	return 0;
}
