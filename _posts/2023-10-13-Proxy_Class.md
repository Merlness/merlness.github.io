---
title:  "Proxy Class"
mathjax: true
layout: post
categories: media
---


Today, we're delving into the world of Python, specifically the Python Koans, where we come across a captivating challenge: creating a `proxy class`. The mission is clear; we want to build a versatile proxy object that can forward attribute calls to a target object and, interestingly, keep track of these attribute calls. Thank you google!


## Understanding the `class Proxy`

Let's delve into the heart of the matter: the Proxy class. It's purpose is to act like a "middleman" in order to either: add functionality to the "Real" class, or controlling access to the Principle class.

Here is a sample code I found:


```python
class College:
    '''Resource-intensive object'''

    def studyingInCollege(self):
        print("Studying In College....")


class CollegeProxy:
    '''Relatively less resource-intensive proxy acting as middleman.
     Instantiates a College object only if there is no fee due.'''

    def __init__(self):

        self.feeBalance = 1000
        self.college = None

    def studyingInCollege(self):

        print("Proxy in action. Checking to see if the balance of student is clear or not...")
        if self.feeBalance <= 500:
            # If the balance is less than 500, let this person study.
            self.college = College()
            self.college.studyingInCollege()
        else:

            # Otherwise, don't instantiate the college object.
            print("Your fee balance is greater than 500, first pay the fee")
```

As you can see the `CollegeProxy` class acts as a gatekeeper, controlling access to the resource-intensive `College` object. It checks if the student's fee balance is sufficient before allowing them to study. it both adds an additional layer and functionality to `College`.

I am almost done with the Python Koans. Today this concept was what provided the biggest difficulty today. It has been incredibly interesting learning about the MANY powerful tools in Python's toolbox.

Alas it is basically the weekend, and there is much resting to be had. Until next time, Happy coding!

Best,

Merl
