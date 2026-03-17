# Warmup-2 solutions

def string_times(s, n):
    """Return a new string that is n copies of the original string."""
    return s * n

def front_times(s, n):
    """Return n copies of the first 3 chars of the string. If the string length is less than 3, use whatever is there."""
    front = s[:3]
    return front * n

def string_bits(s):
    """Return a string made of every other char starting with the first."""
    return s[::2]

def string_splosion(s):
    """Return a string made of the first char, then the first 2, then first 3, etc."""
    result = ""
    for i in range(len(s)):
        result += s[:i+1]
    return result

def last2(s):
    """Return the count of occurrences of the last 2 chars appearing elsewhere in the string."""
    if len(s) < 2:
        return 0
    last2 = s[-2:]
    count = 0
    for i in range(len(s)-2):
        if s[i:i+2] == last2:
            count += 1
    return count

def array_count9(nums):
    """Return the count of 9's in the array."""
    return nums.count(9)

def array_front9(nums):
    """Return True if one of the first 4 elements is a 9."""
    return 9 in nums[:4]

def array123(nums):
    """Return True if the sequence 1,2,3 appears in the array."""
    for i in range(len(nums)-2):
        if nums[i:i+3] == [1, 2, 3]:
            return True
    return False

def string_match(a, b):
    """Return count of positions where the length-2 substrings of a and b match."""
    count = 0
    for i in range(min(len(a), len(b))-1):
        if a[i:i+2] == b[i:i+2]:
            count += 1
    return count

# Тестирование функций
if __name__ == "__main__":
    print("Testing Warmup-2 functions:")
    print(f"string_times('Hi', 2) = {string_times('Hi', 2)}")  # HiHi
    print(f"front_times('Chocolate', 2) = {front_times('Chocolate', 2)}")  # ChoCho
    print(f"string_bits('Hello') = {string_bits('Hello')}")  # Hlo
    print(f"string_splosion('abc') = {string_splosion('abc')}")  # aababc
    