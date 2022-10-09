def solution(array):
    num_of_seven = 0
    for num in array:
        num_of_seven += len([digit for digit in str(num) if digit == '7'])
    return num_of_seven