---
title:  "Lessons From Yesterday"
mathjax: true
layout: post
categories: media
---

So far on my short journey I have come across three steps I need to take in order to pass an *Advent of Code* challenge. Of course over time I am sure I will have a more nuanced view and understanding.
Until then, let's keep things simple.  

# Step 1: Problem solving
In life if one is presented with a problem, one must solve it. There are many methods to do this, so just choose one! This was the lesson from yesterday.
Of course, you can boil everything down to this. I am referring to specifically the image you create in your mind to create a path in which you could move forward in the problem.


Every problem will vary, however I would `#probably foolishly` say that of the 3 steps I struggle the least with this.


An example of this would be like today, I had to see if 3 sides could possibly make a triangle `1,2,4 could never make a triangle because sides 1 and 2 are shorter than 4`.
Checking to see if the legs could make a triangle was no problem, it was organizing the data below. If you see originally the task was to comb through the data by row `101, 301, 501 #not a triangle`, the next task was to comb through the data by columns `101, 102, 103 #almost an equilateral triangle`.  

```python
101 301 501
102 302 502
103 303 503
201 401 601
202 402 602
203 403 603
```

My initial idea was to find '\n' and use the next integer in the sequence. Not sure why but I turned everything into a string and was having a tough time. I pivoted towards flattening the array `[101, 301, 501, 102, 302, 502 ...]`  

# Step 2: Translating to the language

Now you may say that step 1 and step 2 are the same. To those that say that, I say *this is my blog, I say 2 different steps*. I would say there is some overlap between these 2 steps, however currently I feel like this is the part that is taking the most time.


Back to the problem, I wanted to flatten it and then get every third value and `.pop()` them away! By the way when I rediscovered pop, it was like a fresh spring in the desert. The problem with iterating over every third value, is that if you iterate over the list again with 3 value intervals, it will no longer serve the purpose you wanted.

```python
# This was useful

flat_original_list = [101, 301, 501, 102, 302, 502 ...]
# but not immediately.

#What I thought of was to group them like I would for any triangle, in a list of lists. I have become very fond of these recently.

fake_triangle_list = [[101, 301, 501], [102, 302, 502], ...]  

#Now this is what I did in the first part of the problem
#I wanted to use this template,
#I created a second empty list, flat_correct_list, where I would place the .pop() value from the fake_triangle_list into the flat-flat_correct_list. The .pop() function also deletes the value from the original list,fake_triangle_list.


flat_correct_list = [101]
fake_triangle_list  = [[ 301, 501], [102, 302, 502], ...]

#I won't get into the weeds here, but I iterated over the first element of each fake triangle and transferred it to the flat_correct_list. Until it became this.

flat_correct_list = [101, 102, 103, 201, 202, 203, 301, ...]

#Now I grouped every 3 values into their own list within the list.

correct_triangles = [[101, 102, 103,],  [201, 202, 203,] [301, ...]

#Run it through the previous function and viola, it works.
```


# Step 3: Optimize Prime

Ok just just optimize. This also is a challenging aspect so far. Of course, this step makes perfect sense. If every variable was an 'i' or 'j' it would make everything exponentially more difficult to understand, naming is crucial. Simplicity is key, why have 20 lines of code when 5 make it cleaner. Readability is important for everyone, others and yourself.

The first difficulty of this step is getting past the little voice saying completion is good enough. Next is the cleaning part which is a weakness of mine, sorry ma. The funniest part `type 2 funny` is when you find something later that would have been a major help earlier. For example:
```python
101 301 501
102 302 502
103 303 503
201 401 601
202 402 602
203 403 603

#Numpy.loadtext() arranges the data into a 2d array that can be called upon as such
#And numpy can call rows or columns, whatever you need.

numpy_data = np.loadtxt('./advent_of_code.txt')
print(numpy_data)
print(numpy_data[:,0])

[101. 301. 501.]
 [102. 302. 502.]
 [103. 303. 503.]
 [201. 401. 601.]
 [202. 402. 602.]
 [203. 403. 603.]]

[101. 102. 103. 201. 202. 203.]
# much faster and cleaner than what I did.

```

# Conclusion: Learn numpy




Programmers Rollout,

Merl
