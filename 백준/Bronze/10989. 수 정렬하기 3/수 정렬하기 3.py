import sys
a = [0] * 10001
for _ in range(int(sys.stdin.readline().strip())):
  a[int(sys.stdin.readline().strip())] += 1
for i in range(len(a)):
    if a[i] != 0:
        for _ in range(a[i]):
          print(i)
