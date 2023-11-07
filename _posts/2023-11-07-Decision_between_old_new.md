---
title:  "Decision between the old and the new"
mathjax: true
layout: post
categories: media
---


It seems like creating the framework was incredibly useful.

It took me some time in the beginning to create the board as well as the input. The main reason I was playing with the colors and background on the board. It took a while to just decide on a simple pattern.

The next difficulty I faced was learning how to create simple tests and implement them to the functions I wanted to write in Tic Tac Toe. Especially the input functions where I was trying to get input from the user. It was challenging to find a way to pass the tests for such a thing.

Those were my first 2 days, and once I created the framework yesterday, today was a breeze when it came to coding. When it came to the winning and tie conditions, it was a simple process. To both test and code for.

The next step was one I was on the fence about. Do I refactor my old logic for the computer, with a million if statements. Here is an example:

```python
def computer():
list[0] = "x"


#branch 1
if list[1] == "o" and counter >=2 and list[6] != "o" and list[8] != "o" and list[4] != "o":
list[4] = "x"


#branch2
elif list[2] == "o" and counter>=2:
list[6] = "x"


if list[3] == "o" and counter >=4:
list[8] ="x"
#branch3
elif list[3] == "o" and counter >=2 and list[4] != "o":
list[4] ="x"


if list[8] == "o" and list[2] ==2 and counter >=4:
list[2] ="x"
#branch5
elif list[5] == "o" and counter >=2 and list[4] != "o":
list[4] = "x"


if list[8] == "o" and list[2] ==2 and counter >=4:
list[2] ="x"
#branch6
elif list[6] == "o" and counter >=2 and list[4] != "o":
list[2] = "x"


if list[1] == "o" and list[8] ==8 and list[4] == 4 and counter >=4:
list[8] ="x"
#branch7
elif list[7] == "o" and counter >=2 and list[4] != "o":
list[4] = "x"


if list[8] == "o" and list[6] == 6 and counter >=4:
list[6] = "x"

```

After what I have learned, I cringe looking at this. I remind myself that I tried my best at the time, and now I know much better.

Do I refactor that code or do I learn MiniMax?

For now I will try and learn MiniMax, if that goes well I will finish it. If not I will refactor the previous logic. I say refactor instead of build from the ground up because that is too much logic to have to rethink. After a quick Google search it seems like there are 19,683 possible states to Tic Tac Toe. Obviously I did not hard code `THAT` many possible states but enough to not go through that process again.

Wish me luck!

Merl
