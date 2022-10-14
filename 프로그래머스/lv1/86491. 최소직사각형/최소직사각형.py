def solution(sizes):
    긴쪽 = 짧은쪽 = 0
    for 길이 in sizes:
        길이.sort()
        if 긴쪽 < 길이[1]:
            긴쪽 = 길이[1]
        if 짧은쪽 < 길이[0]:
            짧은쪽 = 길이[0]
    return 긴쪽 * 짧은쪽