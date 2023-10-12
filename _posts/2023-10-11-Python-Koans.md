---
title:  "Python Koans"
mathjax: true
layout: post
categories: media
---




## Python Koans

In order to master Python, I am doing the *Python Koans*!

The first portion so far has been relatively straight forward. Since it is my first language it is taking sometime to learn the ins and outs utilized by the language. I realize by completing this I will not know everything, nor have everything memorized, but I will learn a lot. Along with learning it will provide a great resource in the future if I have problems or questions regarding Python.

## Exceptions and Errors
The section of koans that was giving me the most trouble today has been Exceptions and Errors `cue the spooky music`. You know how to get better at understanding something? Blog about it!

I'm used to seeing SyntaxErrors like so:

```python
for i in range(5)
    print(i)
*Error message that comes out*
#for i in range(5)
                  ^
#SyntaxError: expected ':'

#Now we fix it and get what we want

for i in range(5):
    print(i)

0
1
2
3
4

```

In Python, `Exceptions` are typically raised in response to errors that prevent Python from executing the code, either due to impossibility or when you intentionally include exceptions to guide the program's behavior according to your preferences.

```python
#not possible
try:
    result = 10 / 0
except ZeroDivisionError:
    print("If you can divide by 0 there is a fields medal in your future. How you like them apples?")


#preference
while True:
    try:
        x = int(input("Please enter a number: "))
        break
    except ValueError:
        print("Try again")


#preference also but with finally. Finally executes regardless if and exception happened or not.
try:
    # Code that may raise an exception
except SomeException:
    # Exception handling
finally:
    # World Peace!
```

The previous information posted wasn't what was giving me trouble. It was the custom Exceptions which were difficult to wrap my head around.

```python
#WAHT!?
class MySpecialError(RuntimeError):
        pass

    def test_exceptions_inherit_from_exception(self):
        mro = self.MySpecialError.mro()
```

For this moment I have chosen the simplest understanding for this path. In time I hope this koan will bring me to enlightenment. My understanding of these Errors and Exceptions so far, is that there is one king and that is `Exception`. Under the king there are noble-exceptions like `RuntimeError`, and you can create general populace exceptions like `MySpecialError`.

Overall it was a good day. Outside of Errors, I think my biggest difficulty is understanding Classes. Over time and koans I believe I will gain more understanding of the subject matter. And I will provide my insight here.

Best,

Merl   

P.S. I had a SyntaxError trying to publish this on my blog. How ironic!
