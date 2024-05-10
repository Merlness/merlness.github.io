---
title:  "Abstract Server"
mathjax: true
layout: post
categories: media
---

Let’s create a simple situation. Say you want to write a program to control a light, and a switch.

What would you do?

I say if the situation is that simple then just create a light object, place turn off and turn on inside. Then you should have a Swtich to do just that. Nice and simple!

IMAGE 1

As we all know, life is never that simple. And as a developer you should know this as well.

Let us add in a fan to go with it.

Well, then let’s just add another object Fan, again it can turn on and off. Then we need a Fan Switch which can control the fan as well. Fan Switch could inherit from Switch. However, Switch is dependent on light, so that means we have to take light everywhere we take Switch.  So Fan Switch would be dependent on the object light.

IMAGE 2

If only there was a Design Pattern to help us solve this ….

But there is: ABSTRACT SERVER

Before we were violating the Open/Closed principle, as well as the Dependency Inversion Principle. The way to fix that is by using the Abstract Server which begins with Dependency Inversion.

Here we can create an Interface Switchable and have the Light and Fan object implement Switchable, and then have Switch control them!

This gets rid of our previous violations because now we are dependant on abstraction and not concrete details, as well as if we want to add more lights, fans, or anything that has a switch we can do so easily without disrupting the rest of the code.

IMAGE 3

Hopefully this helps describe the Abstract Server.

Best,

Merl
