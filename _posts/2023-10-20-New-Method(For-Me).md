---
title:  "New Method (For Me)"
mathjax: true
layout: post
categories: media
---

The "For Me" in the title carries a lot of weight. So far in my problem solving portion of my challenges I have been typing in the code editor `Shout out to VS code!`. What I mean is I have been mainly storing the ideas in my head then just typing out the code I think could work. The past 2 days I have been on problems where my mental storage has reached capacity. Today's problem has been Advent of Code year 2017 Day 3 part 1.

The problem I faced:

![Screenshot 2023-10-20 at 3 42 21 PM](https://github.com/Merlness/Merlness/assets/132521590/a6488761-0b39-43a1-ab34-43768130ac83)

```python
# Here we have an infinite spinning numerical structure.
# If given an integer, what are the minimum steps needed to read 1. The steps can only be up, down, left, or right.
#
# For example:
#
# Data from square 1 is carried 0 steps, since it's the center.
# Data from square 12 is carried 3 steps, such as: down, left, left.
# Data from square 23 is carried only 2 steps: up twice.
# Data from square 1024 must be carried 31 steps.


# How many steps are required to go from 277678 to 1?

```
For me this is a mighty problem. I wasn't sure how to approach it, so I reclined in my chair and pondered ...

Most problems I have done recently have had some coordinates involved, so I decided to try a different approach. After I composed myself from staring at the almost golden ratioed problem, I started noticing patterns that were emerging which I could use to my advantage. As I kept looking I saw a few more and a few more patterns. I couldn't keep track of them so I opened up my Notes app and started writing down what I thought.

This sounds silly but in my short time of coding this is the first time I have done this. Of course I have done this for math and physics problems, but that's different. Those subjects you need pencil and paper, this is a completely different medium so that process did not immediately transfer.

Needless to say this was incredibly helpful when it came time to actually code. I will post the notes and code below

```python
# Every box perimeter gets bigger by 8
# Corner difference increases by 2 after a complete box 5-3 = 2, 17-13 = 4, 37-31 = 6
# Min distance as box increases is added by previous min +1, max distance is previous max+2
#
# 1024 between 31 squared and 33 squared, closer to 33^2 ==1089
# 16th square, min =16 max =32
#
# Perimeter of outer square = difference of new odd square to old odd square eg 25-9 = 16
#
# First Corner = perimeter of outer square/4 +previous odd square
# Second corner += perimeter of outer square/4
# Third corner += perimeter of outer square/4
# Fourth corner = new odd square
#
# Corner is the max number of moves,
# Min distance = how many odd squares you have passed, example: 4, you have 'passed' 1 square and therefore the min possible distance is 1;
# another example: 21, you have passed square 1, 9 but have not passed square 25 so the min moves for 21 is 2
# Max distance = 2 * min distance, if the shortest distance to the side is the min distance then the corner is the sum of 2 min distances  
#

# Moves = max moves(corner)- distance from a corner
# Distance from corner = either bigger corner minus number or number minus smaller corner or number - previous odd square #whichever is smallest
# Distance from corner = could also equal absolute value of all corners from odd square to next odd square minus the number. Then choose the smallest value

import math

def get_distance(number):
    old_square = 0
    new_square = 0

    for s_root in range(number+1):
        s_root = 1
        root_list = []
        while number > s_root*s_root :
            s_root += 2
            root_list.append(s_root)
        else:
            old_square = (s_root-2) * (s_root-2)
            new_square = s_root * s_root
            perimeter = new_square - old_square
            corners_separated_by = perimeter/4
            corners = [old_square + corners_separated_by,
                       old_square + 2 * corners_separated_by,
                       old_square + 3 * corners_separated_by,
                       new_square,
                       old_square]

            min_distance = len(root_list)
            max_distance = int(2 * min_distance)

            possibilities = [abs(number -corners[0]),
                                 abs(number - corners[1]),
                                 abs(number - corners[2]),
                                 abs(number - corners[3]),
                                 abs(number - corners[4])]
            possibilities.sort()

            distance = int(max_distance - possibilities[0])
    return distance

print(get_distance(277678))

```  
The notes are a bit messy but I posted them to show the thought process.
I don't know if this will be useful for part 2 but I did something in a different way, so I'm pretty pleased.

Now it's time to optimize ...

Until next time,

Merl
