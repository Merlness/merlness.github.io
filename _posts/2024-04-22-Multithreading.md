---
title:  "Multithreading"
mathjax: true
layout: post
categories: media
---

Welcome back to my blog, where today I’m excited to share how something so small,  improving the responsiveness of a ping program, led me to embrace multithreading in my server.
A Ping
One of the items to add to my server was a ping ability. This basically means I would sleep the program for lets say 10 seconds, and it would return the current time.
The point of this is to implement multithreading. Because if my server were to receive multiple requests then ideally one request should not be queued up one after the other.

They should be produced at their respective time.


What this means is, if I have 8 tabs and I refresh them all immediately. There are 2 situations that can happen. Before I go into them let's assume it takes about 7 seconds to refresh them all. Lets add 7 seconds to each situation.

Situation 1, there is only one thread and it is queued up. This means that it will take 8 10-second pings plus the 7 second refresh-tab time in order for everything to happen. Obviously it would not be good to wait 87 seconds for this task.

The next and better situation is it would take about 17 seconds for all 8 tabs to handle this situation. 10 seconds because the program is meant to sleep for 10 seconds, and 7 seconds to move between pages.


Our server had a basic yet crucial functionality: responding to a ping request that simulates a 10-second processing delay using Thread.sleep(10000). This feature, while simple, was critical for monitoring the server's availability and responsiveness. However, it became apparent that handling this in a single-threaded manner was a bottleneck, especially evident when multiple requests hit our server simultaneously.

Here’s a snippet of how I transformed our server to handle multiple requests independently, using Java’s ExecutorService:
```java
public void server() {
 try {
 ServerSocket server = new ServerSocket(port);
 ExecutorService executor = Executors.newCachedThreadPool(); // Enables management of multiple threads
 while (true) {
 Socket socket = server.accept(); // Listen for incoming connections
 executor.execute(new ConnectionThreadHandler(socket, new RequestHandler(rootDirectory)));
 // Each request is handled in its own thread
 }
 } catch (IOException e) {
 throw new RuntimeException(e);
 }
}
```
How It Works:
Server Socket Listens Continuously: Our server listens for incoming requests constantly. Once a request is received, it’s handed over to a ConnectionThreadHandler.

Independent Request Handling: Each connection is handled independently by a separate thread, thanks to the ExecutorService. This allows one request to sleep during its processing (like during a ping) without blocking others.

Next the newCachedThreadPool() allows for the creation of a new thread only when needed. This allows me the flexibility of not worrying how many potential threads I need to make.


The ConnectionThreadHandler implements Runnable, making it suitable for execution by a thread. Here’s a peek into its workings:

```java
public class ConnectionThreadHandler implements Runnable {
 private Socket socket;
 private RequestHandler requestHandler;

 public ConnectionThreadHandler(Socket socket, RequestHandler requestHandler) {
 this.socket = socket;
 this.requestHandler = requestHandler;
 }

 public void run() {
 try (

//logic here
 sendResponse(response);
 }
 }

```



Who knew something so simple and small like `ping` would make me do something so drastic like making my whole system based on multiple threads.


This change not only solved the immediate problem but also set the stage for handling more complex and numerous requests as my application scales. Multithreading has truly been a game-changer, ensuring that our server remains responsive and robust.

The smallest features often inspire the most significant changes.
Best,

Merl
