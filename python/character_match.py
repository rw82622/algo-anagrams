def is_character_match(string1, string2):
    isAnagram = True
    lowerString1 = string1.lower()
    lowerString2 = string2.lower()
    for i in lowerString1:
        if i not in lowerString2:
            isAnagram = False
            break
    return isAnagram