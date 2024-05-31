---
title: "Combining Projects"
mathjax: true
layout: post
categories: media
---

I wanted to learn how to go from ClojureScript to a static webpage .
I was able to do this to a small extent with the sample project I mentioned before, however what I needed to do was to change my previous TTT game to this and have it all maintain the same functionality.

This proved to be more challenging. Initially I thought If I changed the deps.edn and added the files that aren’t the same it would work. Ok maybe I knew it wouldn’t be so simple but I figured that would be close enough.
## Dependencies
In hindsight it was a decent idea but there are always bumps. Part of it was I did not change my dependencies perfectly initially, and it took time to figure that out.
The  aliases and dependencies were correct, but I forgot to scroll up and change the `:paths` in my deps.edn.


## Project Name

The other change that took time, was since I did just copy the files from one project to another, I forgot to change the name of the project from sample project to its new/old project Tic Tac Toe. Originally I had changed it in the obvious places.

However now I had to find the locations where sample_project was used and change it manually to it’s new home.

## Pruning
This was the most challenging because it is tough to know where to prune. There were many garbage files, so it was hard to know which files were necessary and which ones are not.

The simple part is if there is any repetition of files, find out which one is useful and delete the rest.
Unlike real pruning, I had an advantage because I could undo a delete. Which makes deleting slightly less nerve wracking.

After pruning and un pruning, my simple idea of copying the project that worked into the project that needed to add the same functionality did work.

I just had to get the important parts correct.


Best,

Merl
