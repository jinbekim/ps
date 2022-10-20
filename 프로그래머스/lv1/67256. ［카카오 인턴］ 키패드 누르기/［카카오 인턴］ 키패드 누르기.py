get_dist = lambda cord, num: abs(cord[0] - num[0]) + abs(cord[1] - num[1])

def solution(numbers, hand):
    answer = ''
    r_cord = (3,2)
    l_cord = (3,0)
    for num in numbers:
        if (num in [1,4,7]):
            answer += 'L'
            l_cord = (num // 3, 0)
        if (num in [3,6,9]):
            answer += 'R'
            r_cord = (num // 3 - 1, 2)
        if (num in [2,5,8,0]):
            if num == 0:
                num = 11
            r_dist = get_dist(r_cord, (num // 3, 1))
            l_dist = get_dist(l_cord, (num // 3, 1))
            if r_dist == l_dist and hand == 'right':
                answer += 'R'
                r_cord = (num // 3, 1)
            elif r_dist == l_dist and hand == 'left':
                answer += 'L'
                l_cord = (num // 3, 1)
            elif r_dist > l_dist:
                answer += 'L'
                l_cord = (num // 3, 1)
            else:
                answer += 'R'
                r_cord = (num // 3, 1)
            
    return answer