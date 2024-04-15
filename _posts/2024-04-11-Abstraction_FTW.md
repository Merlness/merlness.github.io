---
title:  "Abstraction FTW"
mathjax: true
layout: post
categories: media
---


There is a difference between knowing something and implementing it.

I have been well versed in the SOLID principles, on top of that I have given short presentations on them. However, sometimes it may be difficult to implement those ideas into your code.

I faced such an issue today.

I had been having my `RequestHandler`do many duties. Before I refactored it was 162 lines of code. Originally it was meant to guide the send the requests to their desired handling.
Then I decided to handle the requests there as well.

This violates the Single Responsibility principle, the Open-Closed principle, and the Dependency Inversion principle.

SRP because clearly the class was doing multiple things.

OCP because I could not have added new features without going in and doing extensive code surgery.

And finally DIP specifically because I am trying to implement the Guessing game as one of the pathways.

I have a guessing game, and I wanted to connect it directly to this `RequestHandler` class. However, I was creating a method in the `RequestHandler` class and it was getting very large. This meant that the `RequestHandler` was dependent on the details of the Guessing game.

Why does the `RequestHandler` care about the details of the Guessing Game? It shouldn’t, it should care that it can send the request to the correct location and that is it!

So now I have cleaned up the Class and it is now only 64 lines long, and I created 3 more classes to handle their desired locations!

Now my main method in `RequestHandler` looks like this:

```java
private Response handleDirectories(Request request) {


   String requestPath = request.getPath();


   switch (requestPath) {
       case "/hello":


           return FilePathHandler.generateResponse("Hello",
                   "<h1>Hello!</h1><p>Welcome to My Server!</p>");


       case "/favicon.ico":
           return keepPath;


       case "/ping":
           return ping.handlePing();


       case "/guess":
           Response guessingGame = guessingGameHandler.handleGuess(request);
           return guessingGame;


       default:
           return handleDefaultPath(requestPath);
   }
}

```
Nice and simple.

Until next time!

Merl
