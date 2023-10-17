---
title:  "Advent of Code: Day 2"
mathjax: true
layout: post
categories: media
---

If you are unaware of *Advent of Code* it is a set of programming challenges based around the theme of Christmas; these challenges have been released every December since 2015.

We are going straight to the beginning, 2015! Now you may say to yourself "Merl, if we are we starting at the beginnging where is Day 1?". Great question, Day 1 was *EZPZ* as true gamers call it. There is no need to mention it here.
Therefore we are starting at Day 2 of *Advent of Code*.

The premise is that presents need to be wrapped and ribboned by elves. They need to find the exact amount of both wrapping paper and ribbon to order. We solve this by using the dimensions of presents ex: `3x11x24, 13x5x19, 1x9x27`, and these equations to come to a precise answer:

``` python
wrapping paper: 2*l*w + 2*w*h + 2*h*l
ribbon: the smallest perimeter of any one face and the cubic feet of volume of the present

example:
# A present with dimensions 2x3x4 requires 2*6 + 2*12 + 2*8 = 52 square feet of wrapping paper plus 6 square
#feet of slack, for a total of 58 square feet.

# A present with dimensions 2x3x4 requires 2+2+3+3 = 10 feet of ribbon to wrap the present
#plus 2*3*4 = 24 feet of ribbon for the bow, for a total of 34 feet.
```
To me the most difficult part of this challenge was importing and formatting the data that is given. I will go over my process here.


## Step #1: Fetch the data
I created this function to be able to copy the data from the text file and format it into a list. The problem was there was a new line after every gift dimension so I had to take out the "\n" data.

``` python
def fetch_test_data(path):
    file = open(path, "r") #opens and reads the text
    text = file.read() #copies the data into this variable
    file.close() #didn't your parents always tell you to close the door after you enter or leave a room?
    return text.split("\n") # This was the newest part for me in this section, creating a list using the delimiter "\n"

    #This function turns
    # 3x11x24
    # 13x5x19
    # 1x9x27

    #Into this:
    #['3x11x24', '13x5x19', '1x9x27']
    #This is great, however we still have the x in between the numbers.
    #This is getting closer to what we want but still needs work.

```

## Step 2: Format Test data

Now we have the data but we need to format it. I created the `format_test_data` function to receive `'1x9x27' and turn it into [1, 9, 27]`.
I just want the dimension and not the 'x' of course.

Comprehensions are probably my favorite tool so far in Python. They are incredibly powerful and make going through lists much easier.
```python
import re

def format_test_data(lines):
    return [int(s) for s in re.findall(r'\d+', lines)]

    #Now this ['3x11x24', '13x5x19', '1x9x27'] turns into [[3, 11, 24], [13, 5, 19], [1, 9, 27]] #Perfect

```

Before this can be done we do need to `import re` which will aid us tremendously.
We imported re to use `re.findall(r'\d+', lines)` Lines is what we are searching through, and "r'/d+'" is searching for only integers. However findall saves the integers as strings and that is why we use `int(s) for s in` to save this data into integers.

## Step 3: Fetch and Format Test data

Now that we have created the functions to clean up our data in order to utilize it, we have to actually import it.

```python
dimensions_list = [format_test_data(x) for x in fetch_test_data('../test_data/2015/day_2.txt')]
#another comprehension <3
```

The fetch_test_data function reads the file, and the format_test_data function extracts integers from each line. Now the result is a list of lists, where each inner list contains the dimensions of the presents from a line in the file.
## Conclusion
What have I learned through this? Well, parsing and formatting test data from a file is a common task when working on coding challenges and projects. I am happy to learn this now, so I can be well prepared in the future.

Best,

Merl

PS.

I suppose I should write the rest of my code which I used to solve the actual problems. Here it is:

```python
def area(dimension):
    length = dimension[0]
    width = dimension[1]
    height = dimension[2]

    return (2 * length * width
            + 2 * width * height
            + 2 * length * height
            + min(length * width, width * height, length * height))

def wrapping_paper(data):
    total_wrapping_paper=0

    feet_of_wrapping_paper = [area(dimension) for dimension in data]
    total_wrapping_paper = sum(feet_of_wrapping_paper)

    return print(total_wrapping_paper)

#part 2
def ribbon_feet(dimension):
    short_side_1 = sorted(dimension)[0]
    short_side_2 = sorted(dimension)[1]

    return ( 2 * short_side_1
            + 2 * short_side_2
            + (dimension[0]
            * dimension[1]
            * dimension[2]))

def ribbon_total(data):
    ribbon_total = 0

    ribbon = [ribbon_feet(dimension) for dimension in data]
    ribbon_total = sum(ribbon)

    return print(ribbon_total)

wrapping_paper(dimensions_list)
ribbon_total(dimensions_list)

```
