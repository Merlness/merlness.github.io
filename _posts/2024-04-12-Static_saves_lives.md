---
title:  "Static Saves Lives"
mathjax: true
layout: post
categories: media
---

Again with the dramatic titles. I just want to highlight how important one word can be.

As you know I have been having trouble with the guessing game.

Little by little I have been making progress. One thing I have found super useful was to write down overall what I needed to accomplish in a general sense, then slowly add in the details to help accomplish this. This idea may not be completely revolutionary but it has been incredibly useful. I probably should have made a post about this by itself but we are here now.

This post is about the abstraction between my guessing game and the request handler.
This is about the guessing game handler.

## Guessing Game Handler

I have been progressing, little by little.

Initially I created an input that would take a number between 1 and 100.


Next I was able to see the body of the request. The body contained the name of the input along with the value that was entered in the client.

This is great, I had my guess now I had to do something with it.

I now placed the guess into the game and took a response about the guess related to the actual random number the game came up with.

I could send this from the server to the client.


## Same Issue

However, this one problem persisted longer than I had anticipated. That problem was … Every time I sent a guess, a new random number was generated or a new game was created.

I tried many solutions until I found one that would work well. I would create a hashmap that could store an Id relating to my game, this would be the key. And I would store the game as the value to that key. Initially I wanted to start at 1 and keep going up, but there could be problems going that route.

Next I thought of getting a random number from -1 billion to 1 billion as the key, but again there is a small chance the keys may match. I finally found this

```java
gameId = UUID.randomUUID().toString();
```
This eliminates the likelihood of having the same key.

This is perfect, now I need to compile and run for glory.

Guess what happens next? The game is still refreshed on the next request.

I scour through my code and making sure no new games are created unless the game is over.

Then i find this


```java
private HashMap<String, NumberGame> games = new HashMap<>();
```

I see that this is created every time my guessing game handler is called. And i search to find a solution to this problem. Little did i know it would be one simple word

```java
private static HashMap<String, NumberGame> games = new HashMap<>();
```

I knew that a server was stateless and it would be a problem sending information. At least for now I have this solution that works because declaring the games HashMap as static, I shifted it from an instance level to a class level.

Now, it wasn't bound to the specific instance of the guessing game handler that created it. Instead, it lived across all instances, maintaining its state no matter how many times different requests instantiated new handlers.


This small but mighty change meant that once a game was created and stored with an ID.

I may have to make changes to it later, but for now I will savor this victory.

Best,

Merl
