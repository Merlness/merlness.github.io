---
title: "Mediator Design Pattern"
mathjax: true
layout: post
categories: media
---

Mediator Pattern

Initially I chose this pattern because I perceived it to be similar to a Regulator, like one of my favorite old school
songs. This is far from this, however this is more like a counselor rather than a big boss dog.

However this still solves problems!

## Analogy

Say you are a pilot and you have the airstrip all to yourself. You can come in when you want to, fly and land when you
want. Life is grand!

Now, suddenly the airstrip gets a new pilot and plane. Now there is a little restriction of your freedom, but you can
manage because you can communicate with the new pilot and you can take off and land mostly when you want.

Over time the airstrip is becoming more and more popular. Now there is a third pilot and you and the second pilot must
communicate with each other and the new flier. This continues and continues, sometimes even with helicopters and drones
now too.

Your main goal was to fly but it seems like most of your time and energy is spent trying to coordinate rather than fly.

What if there was a …

## Solution

The mediator pattern! It is a way to manage how different parts of a program talk to each other. Instead of having these
parts (or objects) communicate directly, they go through a middleman called the mediator. This setup keeps things from
getting tangled and complicated because each part only needs to know about the mediator, not every other part. By
centralizing the communication in one place, the Mediator pattern makes the whole system easier to update and maintain.

In this situation the mediator would be like an air traffic controller. You would still need to communicate with the
mediator, but that’s only one person and you don’t need to worry about any other flying object, identified or not. Now
all you have to focus on is your love of flying.

To further understand the pattern, let’s break down its components:
Mediator Interface: Declares methods for communication between components.
Concrete Mediator: Implements the mediator interface and coordinates communication.
Colleague Interface: Declares methods for communication with the mediator.
Concrete Colleagues: Implement the colleague interface and communicate with the mediator instead of directly with each
other.
In this example:
The AirTrafficControl interface acts as the mediator.
TowerControl is the concrete mediator that manages communication between the airplanes.
Airplane is the abstract colleague, and Boeing737 and AirbusA320 are concrete colleagues that interact through the
mediator.
There are advantages and disadvantages however:

#### Advantages:

* Simplifies Communication: By centralizing the communication logic, the pattern simplifies interactions between
  objects.
* Reduces Dependencies: Objects are decoupled, improving system flexibility and maintainability.
* Centralized Control: All communication is managed in one place, making it easier to implement and understand.

#### Disadvantages:

* Single Point of Failure: The mediator can become a single point of failure if not designed carefully.
* Complexity: As more interactions are handled by the mediator, it can become complex and harder to manage.


The Mediator design pattern is a great way to handle complex communications in a system. Just like our example of an air
traffic controller, making sure everything runs smoothly and efficiently. Just like an ATC keeps planes moving safely
and efficiently, the Mediator pattern keeps your software interactions clear and organized.
Using the Mediator pattern in your projects can really boost the flexibility and maintainability of your apps, helping
them stay well-coordinated and efficient.

Best,
Merl
