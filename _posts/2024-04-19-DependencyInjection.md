---
title:  "Dependency Injection"
mathjax: true
layout: post
categories: media
---

In the process of adding tests for my code I came across a class that was tough to test.

It had the name `GuessingGameHandler`.

It was the abstraction between my Request Handler and my guessing game.

This allowed the guessing game to worry only about the game, and this lets call it GGH would worry about sending back a response to the Request Handler.

Again this was created initially by checking the server over and over again and printing many statements. 

I had to recreate this class by beginning with tests.

Now how can one test an abstraction about a random number game?

It is tough to test a random number generator, unless you can control what the random number is.

Now I did have a way of doing this in my game, but not so much in the GGH. So how can I control the game and test the result and the response?

The answer is making more abstractions! Dependency Injection (DI) allowed me to introduce a layer of control over the randomness inherent in the guessing game. By abstracting the creation of game instances into a factory interface, I could inject different implementations of the game during testing versus production.

I made and interface:

```java
public interface GuessingGameFactory {
   GuessingGame create();
}

```
Here is the implementation of that interface for the actual random game:


```java
public class RandomGuessingGameFactory implements GuessingGameFactory {
   @Override
   public GuessingGame create() {
       return new GuessingGame();
   }
}

```

But for testing, I could inject a version of the game that always used a chosen number,allowing me to test consistently:

```java
public class ConstantGuessingGameFactory implements GuessingGameFactory {
   int number;


   public ConstantGuessingGameFactory(int number) {
       this.number = number;
   }


   @Override
   public GuessingGame create() {
       return new GuessingGame(number);
   }


   public void setNumber(int number) {
       this.number = number;
   }
}

```

Using DI was a game-changer for how I could test the GuessingGameHandler. No longer tied down by the randomness of a number generator, I could precisely control the scenarios like making sure the handler knew how to spot whether a guess was too high, too low, or just right.

```java
public class GuessingGameHandlerTest {


   ConstantGuessingGameFactory factory;
   GuessingGameHandler handler;


   @Before
   public void Setup() {
       factory = new ConstantGuessingGameFactory(50);
       handler = new GuessingGameHandler(factory);
   }


@Test
public void correctOnFirstTryTest() {
   Request request = createRequest("guess=50");
   Response response = handler.handle(request);
   String body = response.getBody();


   assertTrue(body.contains("<p>Your guess of 50 is ... Correct! Congrats!</p>"));
 }
}
```

This approach really broadened my testing horizon. I wasn't just testing different guesses anymore; I was also checking how well the `GuessingGameHandler` worked with the `RequestHandler`. And I managed to do all this without constantly pinging the server or filling my logs with endless debugging info.

Best,

Merl
