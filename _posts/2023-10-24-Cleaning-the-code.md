---
title:  "Cleaning the Code"
mathjax: true
layout: post
categories: media
---

Today is the implementation of what I learned yesterday. Which was learning how to clean the code.

A quick recap on the problem the code solves below, there was a list of words and you have to identify whether the words are *nice*! To be *nice* the words need to fit 3 rules. Then you need to find how many *nice* words there are in the long list.

With that being said this I will provide my initial code below then the optimized one after. I will comment on what needs to be changed. All the logic is still the same, the new code is optimized.    

The concept to solve the problem was to create 3 different booleans(one for each rule), create a loop(rule) for each boolean, and then count how many words fit all 3 booleans.



```python

#old version

def word_shifter(words):                    #terrible name for this function
    count = 0                               #counting the 'nice' words, Brilliant!

    for word in words:
        one = True                          #possible the naming of these was too simple
        two = False
        three = False

        for pair in ['xy','ab','cd','pq']:  #these letter pair's can't be in there
            if word.find(pair) >= 0:
                one = False

        if len(re.findall(r'a|e|i|o|u', word)) > 2: #need at least 3 vowels
            two = True

        for c in range(len(word)):          # seeing if letters are back to back
            if word[c] == word[c-1] and c!= 0:
                three = True

        if one and two and three:           #all 3 booleans are met means its a nice word
            count += 1

    print(count)



#optimized version


def find_nice_words(words):                 #much better name
    count = 0

    for word in words:
        if is_nice(word):                   #traded the 3 booleans for 1
            count += 1
    return count                            #the main function is still at the top, but it is much easier to read

def check_nice_one(word):                   #first boolean, same logic
    for bad_letters in ['xy','ab','cd','pq']:   #better naming
            if word.find(bad_letters) >= 0:
                return False    
    return True

def check_nice_two(word):
    if len(re.findall(r'a|e|i|o|u', word)) > 2:
            return True
    else:
        return False

def check_nice_three(word):
    for character in range(len(word)):
        if word[character] == word[character-1] and character!= 0:
            return True
    return False

def is_nice(word):                          # 3 booleans turned into 1, so the main function is nice and clean
    return check_nice_one(word) and check_nice_two(word) and check_nice_three(word)  
```

The naming of the functions and variables is of utter importance. It must be clear what is happening in the code so the next eyes that see it have a good understanding of what is happening. Next the main function looks great at the top, with only one boolean telling it if the word it is looking at is nice or not. The last function is checking to see if the previous ones have been met and is named appropriately, which makes it clear exactly what it is doing.

I think it looks much better now. Now to be able to do this immediately after I write my code. One step at a time.

Best,

Merl
