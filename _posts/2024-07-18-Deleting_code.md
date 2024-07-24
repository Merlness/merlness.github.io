---
title:  "Deleting Code"
mathjax: true
layout: post
categories: media
---

Deleting code can be relieving, it can also cause a little bit of anxiety. 

I say this for me in my situation. 

I was tasked with deleting legacy code that was not functional anymore. It had a purpose, it served it's purpose but
something else was written that performed better. 

Now is the time to get rid of the legacy code throughout the project. 

In some ways this very easy. 

### Easy

The way this is easy is buy going to the file the code is located in, and start deleting the main part of the code. 

With the wonderful IDEs that we have now, it is very easy to see code that is not being used. So if I delete a function it is easy to find a trail that was dependent on it. 

So I just comb through the file, it's tests, and I delete until I cannot CMD + F anything with the name of the functionality I am deleting. 

### Medium
The medium part was making sure the schema did not depend on it, or did not break if the code was deleted or changed. 

#### Hard

The hard but not so hard part is making sure nothing is in the database. 

The process is called migration, so I need to make a file that will delete the code from the database.

The code is quite simple, however what makes this difficult is that many things can go wrong just by working on the database.

The other parts that can go wrong if you don't migrate well is your new servers won't go up.

That is what makes this challenging. The fact that if you don't do this correctly, there will be major consequences later.

Best, 

Merl
