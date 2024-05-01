---
title:  "Testing Exceptions"
mathjax: true
layout: post
categories: media
---

No, this is not an exception to testing. It is testing exceptions!


Testing how code handles exceptions is crucial for development. Today, we will explore a method of testing a Java method that includes handling an InterruptedException. The method under test simulates a network service that responds after a certain delay, similar to ping.

This is the method I am testing.

```java
public class Ping {
    public int time;

    public Response handlePing(String requestPath) {
        setTime(requestPath);
        Date startTime = new Date();

        try {
            Thread.sleep(time);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }

        Date endTime = new Date();
        return createResponse(startTime, endTime);
    }

}
```

One of the key challenges in testing such methods is the InterruptedException thrown by Thread.sleep(). This exception is thrown when a thread that is sleeping, waiting, or otherwise occupied is interrupted, typically by another thread calling interrupt() on the thread.


To make sure our handlePing method correctly handles this scenario, we need to create an interruption. Here’s how I did just that:

```java
@Test
public void pingExceptionTest() throws InterruptedException {
    Ping ping = new Ping();
    Thread testThread = new Thread(() -> {
        try {
            ping.handlePing("/ping/1");
        } catch (RuntimeException e) {
            throw new AssertionError("Unexpected RuntimeException", e);
        }
    });

    testThread.start(); // Starts the ping operation in a separate thread.
    Thread.sleep(100); // Waits briefly to ensure the thread reaches the sleep state.
    testThread.interrupt(); // Interrupts the sleep, triggering InterruptedException.
    testThread.join(); // Waits for the thread to finish execution.
}
```

Thread Creation: A new thread is created to run the handlePing method. This allows me to be in control and interrupt.
Waiting: Thread.sleep(100) ensures that the new thread reaches the point where it executes Thread.sleep(time) within handlePing.
Interruption: testThread.interrupt() forces Thread.sleep(time) to throw an InterruptedException.
Assertion: We expect the method to handle this by rethrowing it as a RuntimeException.

Testing how software behaves under unusual conditions, especially in scenarios where different parts of the application are working simultaneously, might seem complex but is crucial for building trustworthy and durable software. The method we've discussed offers a clear plan to ensure your software can handle unexpected situations gracefully, making sure it's dependable for users no matter what happens.


Best,

Merl
