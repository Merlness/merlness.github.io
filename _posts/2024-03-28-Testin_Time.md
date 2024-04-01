---
title:  "Testing Time"
mathjax: true
layout: post
categories: media
---


I had the wonderful opportunity to write a few programs but bring them into a server. Currently I am still learning a lot about servers so I am making the simple programs that I need to implement in the server. 

First one is a guessing game to see if you can guess the number, the game will respond back with higher, lower, or if you guessed correctly.

Next, is this one I am talking about for today. Telling time. It is nothing revolutionary but I had to provide the time, when asked. I also had to respond 1 second after I asked for the time.

Since I use TDD I decided to test this. I began by testing if I could return the current time.

```java
Time timer = new Time();


@Test
public void returnsSameTime() {
   String currentTime = new SimpleDateFormat("HH:mm").format(new Date());
   assertEquals(timer.time(), currentTime);
}
```
This passed, it was simple since though my class did the same thing. I did test it with the wrong equals to see if it would give me my current times, and it did in fact provide the correct current time.

Now it came time to delay the response by 1 second. I can make this happen but how can I test it?

First let me show you, how I wrote the time code

```java
public class Time {


   String currentTime = new SimpleDateFormat("HH:mm").format(new Date());




   public String time(){
       try {
           TimeUnit.SECONDS.sleep(1);
       } catch (InterruptedException e) {
           throw new RuntimeException(e);
       }


       return currentTime;
   }
}

```
It was very simple.

But before I could write my delay I had to come up with a test to show it would take 1 second. I wrote multiple tests to try this and they all failed, I tried to show that my code would only be true if I waited 1 second in my test. This caused my tests to run for over 2 seconds. I tried to show that my test would not give me the correct response before I had to wait for my test.

This caused my tests to run for 3 seconds and I could not get a failing test.

Then I finally got this brilliant idea.

```java
@Test
public void returnsTimeOneSecondLater() {
   String currentTime = new SimpleDateFormat("HH:mm").format(new Date());


   long start = System.currentTimeMillis();
   timer.time();
   long end = System.currentTimeMillis();


   assertTrue(1000 < (end - start));
   assertTrue(1010 > (end - start));
}

```

I could find the current time in milliseconds, find the difference in end - start, and it should be slightly longer but close to 1 second.

And it failed which allowed me to write my 1 second delay in my code.

Best,

Merl
