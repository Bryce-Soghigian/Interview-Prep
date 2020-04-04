#0(nlog(n)) time | 0(1) space

def twoSum(arr,target):
    arr.sort()
    left = 0#start index
    right = len(arr)-1#end index
    while left< right:#condition for our modified binary search
        current = arr[left] + arr[right]
        if current == target:
            return [arr[left],arr[right]]
        elif current < target:
            left += 1
        elif current > target:
            right -= 1
    return []

    