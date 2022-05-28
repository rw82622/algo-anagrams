from character_match import is_character_match as is_anagram

def anagrams_for(word, list_of_words):
    new_list = []
    for item in list_of_words:
        if (is_anagram(word, item)):
            new_list.append(item)
    return new_list
